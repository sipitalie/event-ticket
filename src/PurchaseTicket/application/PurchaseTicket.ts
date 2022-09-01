
import { TicketRepositoryInterface } from "../domain/repository/TicketRepositoryInterface";


export class PurchaseTicket {
    constructor(readonly ticketRepository:TicketRepositoryInterface){    
    }
    async execute(input:Input):Promise<string>{
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

    
}

interface Input{
    ticket_category:string,
    data:string,
    idEvent:string,
    price:number,
}