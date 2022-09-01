
import { TicketRepositoryInterface } from "../domain/repository/TicketRepositoryInterface";


export class GetTicket {
    constructor(readonly ticketRepository:TicketRepositoryInterface){    
    }
    async execute(ticket_id:string):Promise<any>{
        const ticket= await  this.ticketRepository.get_ticket(ticket_id)
        return  ticket
    }

}
