import {describe, expect, test} from '@jest/globals';
import {randomUUID} from "node:crypto"
import { PurchaseTicket } from './src/PurchaseTicket/PurchaseTicket';
import { PurchaseTicketRepositoryInMemory } from './src/PurchaseTicket/repository/PurchaseTicketRepositoryInMemore';


describe('TurchaseTicket switch test', () => {
  const id=randomUUID()
  const purchaseTicketRepsitory=new PurchaseTicketRepositoryInMemory()
  test('save purchase ticket', async () => {
    const purchaseTicket=new PurchaseTicket(purchaseTicketRepsitory)
    const purchaseRequest={
      ticket_category:"normal",
      data:"02-09-2022",
      idEvent:id,
      price:3500,
    }
    const id_purchase=await purchaseTicket.create(purchaseRequest)
    expect(id_purchase).toBe(id);
  });

  test('get ticket for id', async () => {
    const purchaseTicket=new PurchaseTicket(purchaseTicketRepsitory)
    const ticket =await purchaseTicket.find(id)
   
    expect(Object.getOwnPropertyNames(ticket)).toStrictEqual(["data", "id", "ticket_category", "status","price"]);
  });

  test('get ticket not found retorn a Error', async () => {
    
    const id_not_Exist=randomUUID()
    const purchaseTicket=new PurchaseTicket(purchaseTicketRepsitory)
    try{
      await purchaseTicket.find(id_not_Exist)
    }catch(err:any){
      expect(err.message).toBe(new Error(`Ticket not found`).message);

    }
  
   
   
  });
});