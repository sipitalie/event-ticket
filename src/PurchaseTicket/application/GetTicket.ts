
import { TicketRepositoryInterface } from "../domain/repository/TicketRepositoryInterface";


export class GetTicket {
    constructor(readonly ticketRepository:TicketRepositoryInterface){    
    }
    async execute(ticket_id:string):Promise<any>{
        const ticket= await  this.ticketRepository.get_ticket(ticket_id)
        return {
            id: ticket.id,
            participantEmail: ticket.participantEmail,
            price: ticket.price,
            status: ticket.status,
            ticket_category: ticket.ticket_category,
            event_id: ticket.event_id,
            date: ticket.date
        } 
    }

}
