import { Ticket } from "./entitie/Ticket";

export interface  PurchaseTicketInterface{
    create(input:Input):Promise<string>,
    find(id_ticket:string):Promise<Ticket>,
}

interface Input{
    ticket_category:string,
    data:string,
    idEvent:string,
    price:number,
}