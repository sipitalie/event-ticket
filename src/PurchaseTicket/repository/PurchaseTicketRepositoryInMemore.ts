import { PurchaseTicketRepositoryInterface } from "../domain/repository/PurchaseTicketRepositoryInterface";
import { Ticket } from "../domain/entitie/Ticket";

export  class PurchaseTicketRepositoryInMemory implements  PurchaseTicketRepositoryInterface{
    tickets:Ticket[]
    constructor(){
        this.tickets=[]
        
    }
    async save_ticket(ticket:Ticket):Promise<string>{
        this.tickets.push(ticket)
        return ticket.id
    }
    async get_ticket(ticket_id:string):Promise<Ticket>{
        
        const ticket= this.tickets.find(ticket=>ticket.id===ticket_id)
        if(!ticket)throw new Error(`Ticket not found`);
        return  ticket
       
          
    }


}