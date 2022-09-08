import { EventInterfaceRepository } from "../domain/repository/EventRepositoryInterface";
import { Area } from "../domain/entity/Area";
import { Event } from "../domain/entity/Event";


export  class EventRepositoryInMemory implements EventInterfaceRepository{
    events:Event[]
    constructor(){
        this.events=[] 
    }
    async save(input:Input):Promise<string>{
        const event=new Event({
            
            created_at:new Date().toLocaleDateString(),
            owner_id:input.owner_id,
            title:input.title,
            event_date:input.event_date,
            flyers:input.flyers,
            flyer:input.flyer,
            areas:input.areas,
            number_of_areas:input.number_of_areas
        })
        this.events.push(event)
        return event.id
    }
    async find(id:string):Promise<Event>{
        
        const event= this.events.find(event=>event.id===id)
        if(!event)throw new Error(`Event not found`);
        return  new Event(event)
    }

    async get_events_Owner(owner_id:string):Promise<Event[]>{
        const events= this.events.filter(event=>event.owner_id===owner_id)
        if(!events)throw new Error(`There are no events for this user`);
        return  events 
    }

    async findAll():Promise<Event[]>{
        return  this.events
    }
}

type Input={
    owner_id:string;
    title:string;
    number_of_areas:number;
    event_date:string;
    flyers?:string[];
    flyer?:string;
    areas:string[];
}