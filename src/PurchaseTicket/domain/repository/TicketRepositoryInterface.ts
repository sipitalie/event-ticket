import { Ticket } from "../entity/Ticket";

export interface  TicketRepositoryInterface{
    save_ticket(ticket:Ticket):Promise<string>,
    get_ticket(ticket_id:string):Promise<Ticket>,
}