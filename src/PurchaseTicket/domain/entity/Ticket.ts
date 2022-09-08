import {randomUUID} from "node:crypto"
import { Area } from "../../../EventT/domain/entity/Area";
import {Event} from "../../../EventT/domain/entity/Event";

type TicketProps={
    readonly participantName: string,
	readonly participantEmail: string,
	creditCardNumber: string,
	creditCardCvv: string,
	creditCardExpDate: string,
	area:Area,
    id?:string,
    event:Event
}
export class Ticket{
     price:number;
     participantEmail:string;
     id: string; 
     event_id:string;
     date:string;
     status:string;
     ticket_category:string;
    constructor (private readonly props:TicketProps){  
        this.id=!!props.id?props.id:randomUUID(),
        this.participantEmail=props.participantEmail,
        this.price=props.area.price
        this.status="awaiting_payment"
        this.ticket_category=props.area.category
        this.event_id=props.event.id
        this.date=props.event.event_date
    }
   

    

}


