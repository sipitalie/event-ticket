import {describe, expect, test} from '@jest/globals';
import {randomUUID} from "node:crypto"
import { GetTicket } from '../src/PurchaseTicket/application/GetTicket';
import { PurchaseTicket } from '../src/PurchaseTicket/application/PurchaseTicket';
import { TicketRepositoryInMemory } from '../src/PurchaseTicket/repository/PurchaseTicketRepositoryInMemore';
import {AreaRepositoryInMemory} from "../src/EventT/repository/AreaRepositoryInMemore"
import { EventRepositoryInMemory } from '../src/EventT/repository/EventRepositoryInMemore';
import { CreateArea } from '../src/EventT/application/CreateArea';
import { CreateEvent } from '../src/EventT/application/CreateEvent';
import {AddAreaEvent} from "../src/EventT/application/AddAreaEvent"

const ticketRepository=new TicketRepositoryInMemory()
const areaRepository=new AreaRepositoryInMemory()
const eventRepository=new EventRepositoryInMemory()
describe('Ticket switch test', () => {
  

  let idTicket=""


  test('save purchase ticket', async () => {
    const event=await new CreateEvent({eventRepository}).execute({event_date:"17/09/2022",number_of_areas:1,owner_id:"sipitale-22176",title:"Siga la luna"})
    //const areasRequest=[{category:"Normal", number_of_peaple:1, price:3500},{category:"vip", number_of_peaple:1, price:15000}]
    const oneAreaRequest=[{category:"Normal", number_of_peaple:1, price:3500}]
    const arrayFlayers=["file:///home/shinobi/Transfer%C3%AAncias/Screenshot%202022-07-15%20at%2015-26-59%20Junte-se%20%C3%A0%20yourShadow%20Ignite%20Lab.png"]

    const areas =await new CreateArea(areaRepository).execute({areas:oneAreaRequest,event_id:event})
  
    await new AddAreaEvent({areaRepository,eventRepository}).execute({event_id:event,areas})
    
    const purchaseTicket=new PurchaseTicket({
      ticketRepository,
      areaRepository,
      eventRepository
    })
    const purchaseRequest={
      idEvent:event,
      Idarea:areas[0],
      creditCardCvv:"cvvCode",
      creditCardExpDate:"exp-Date",
      creditCardNumber:"number",
      participantEmail:"fake@gmail.com",
      participantName:"fake name",
    }
    idTicket= await purchaseTicket.execute(purchaseRequest)
    expect(await purchaseTicket.execute(purchaseRequest)).resolves;
  });

  test('get ticket for id', async () => {
    const purchaseTicket=new GetTicket(ticketRepository)
    const ticket =await purchaseTicket.execute(idTicket)
    expect(Object.getOwnPropertyNames(ticket)).toEqual(["id","participantEmail","price","status","ticket_category","event_id","date"]);

  });

  test('get ticket not found retorn a Error', async () => {
    
    const id_not_Exist=randomUUID()
    const purchaseTicket=new GetTicket(ticketRepository)
    try{
      await purchaseTicket.execute(id_not_Exist)
    }catch(err:any){
      expect(err.message).toBe(new Error(`Ticket not found`).message);

    } 
  });
});