import { PurchaseTicketInterface } from "./domain/repository/PurchaseTicket";
import { PurchaseTicketRepositoryInterface } from "./domain/repository/PurchaseTicketRepositoryInterface";


export class PurchaseTicket implements PurchaseTicketInterface{
    constructor(readonly ticketRepository:PurchaseTicketRepositoryInterface){    
    }
    async create(input:Input){
        const saveTicket=  this.ticketRepository
        const ticket_id=await saveTicket.save_ticket(
           {
            data:input.data,
            id:input.idEvent,
            ticket_category:input.ticket_category,
            status:"pendente",
            price:input.price
           }
           
        
        )
        return  ticket_id
    }

    async find(ticket_id:string){
        const getTicket=  this.ticketRepository
        const ticket =await getTicket.get_ticket(ticket_id)
        return  ticket
    }
}

interface Input{
    ticket_category:string,
    data:string,
    idEvent:string,
    price:number,
}