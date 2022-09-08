
import { Event } from "../domain/entity/Event";
import { EventInterfaceRepository } from "../domain/repository/EventRepositoryInterface";


export class GetEvent {
    constructor(readonly eventRepository:EventInterfaceRepository){    
    }
    async execute(id:string):Promise<OutPut>{
        const event= await  this.eventRepository.find(id)
        return {
            id: event.id,
            owner_id:event.owner_id,
            number_of_areas:event.number_of_areas,
            title:event.title,
            event_date:event.event_date,
            created_at:event.created_at as string,
            flyers:event.flyers,
            flyer:event.flyer,
            areas:event.areas,    
        }
             
    }
}

type OutPut={
    id: string,
    owner_id:string,
    number_of_areas:number,
    title:string,
    event_date:string,
    created_at:string,
    flyers:string[],
    flyer:string,
    areas:string[],   
}
