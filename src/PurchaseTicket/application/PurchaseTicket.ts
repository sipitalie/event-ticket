
import { AreaInterfaceRepository } from "../../EventT/domain/repository/AreaRepositoryInterface";
import { EventInterfaceRepository } from "../../EventT/domain/repository/EventRepositoryInterface";
import { Ticket } from "../domain/entity/Ticket";
import { TicketRepositoryInterface } from "../domain/repository/TicketRepositoryInterface";

interface PurchaseTicketProps{
    readonly ticketRepository:TicketRepositoryInterface,
    readonly areaRepository:AreaInterfaceRepository,
    readonly eventRepository:EventInterfaceRepository
}
export class PurchaseTicket {
    constructor(readonly props:PurchaseTicketProps ){    
    }
    async execute(input:Input):Promise<string>{
        const saveTicket=  this.props.ticketRepository
        const area= await this.props.areaRepository.find(input.Idarea)
        const event= await this.props.eventRepository.find(input.idEvent)
        
        const ticket=new Ticket({
            area,
            event,
            creditCardCvv:input.creditCardCvv,
            creditCardExpDate:input.creditCardExpDate,
            creditCardNumber:input.creditCardNumber,
            participantEmail:input.participantEmail,
            participantName:input.participantName,
        })
        const ticket_id=await saveTicket.save_ticket(ticket)
        return  ticket_id
    }

    
}

interface Input{
    Idarea:string,
    idEvent:string,
    participantName: string,
	participantEmail: string,
	creditCardNumber: string,
	creditCardCvv: string,
	creditCardExpDate: string,
}