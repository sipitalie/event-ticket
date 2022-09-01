import {describe, expect, test} from '@jest/globals';
import {randomUUID} from "node:crypto"
import { GetTicket } from '../src/PurchaseTicket/application/GetTicket';
import { PurchaseTicket } from '../src/PurchaseTicket/application/PurchaseTicket';
import { TicketRepositoryInMemory } from '../src/PurchaseTicket/repository/PurchaseTicketRepositoryInMemore';


describe('TurchaseTicket switch test', () => {
  const id=randomUUID()
  const purchaseTicketRepsitory=new TicketRepositoryInMemory()
  test('save purchase ticket', async () => {
    const purchaseTicket=new PurchaseTicket(purchaseTicketRepsitory)
    const purchaseRequest={
      ticket_category:"normal",
      data:"02-09-2022",
      idEvent:id,
      price:3500,
    }
    const id_purchase=await purchaseTicket.execute(purchaseRequest)
    expect(id_purchase).toBe(id);
  });

  test('get ticket for id', async () => {
    const purchaseTicket=new GetTicket(purchaseTicketRepsitory)
    const ticket =await purchaseTicket.execute(id)
   
    expect(Object.getOwnPropertyNames(ticket)).toStrictEqual(["data", "id", "ticket_category", "status","price"]);
  });

  test('get ticket not found retorn a Error', async () => {
    
    const id_not_Exist=randomUUID()
    const purchaseTicket=new GetTicket(purchaseTicketRepsitory)
    try{
      await purchaseTicket.execute(id_not_Exist)
    }catch(err:any){
      expect(err.message).toBe(new Error(`Ticket not found`).message);

    }
  
   
   
  });
});