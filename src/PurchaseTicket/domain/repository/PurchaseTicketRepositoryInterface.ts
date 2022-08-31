import { Ticket } from "../entitie/Ticket";

export interface  PurchaseTicketRepositoryInterface{
    save_ticket(ticket:Ticket):Promise<string>,
    get_ticket(ticket_id:string):Promise<Ticket>,
}