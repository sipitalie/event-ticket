import {randomUUID} from "node:crypto"
import { Area } from "../domain/entity/Area";
import { Event } from "../domain/entity/Event";
import { EventInterfaceRepository } from "../domain/repository/EventRepositoryInterface";
import { CreateArea } from "./CreateArea";
import { CreateFlayer } from "./CreateFlayer";


type EventDependeceObject={
    readonly eventRepository:EventInterfaceRepository;
    readonly createArea?:CreateArea;
    readonly createFlayer?:CreateFlayer;   
}
export class CreateEvent {
    constructor(private readonly props: EventDependeceObject){  
    }
    async execute (input:Input):Promise<string>{
        const event = new Event({
            event_date:input.event_date,
            owner_id:input.owner_id,
            title:input.title,
            number_of_areas:input.number_of_areas
        })
        const event_id= await this.props.eventRepository.save(event)
        return event_id
    };
   
}

type Input={
    owner_id:string;
    event_date:string;
    title:string;
    number_of_areas:number;
    flyers?:string[];
    areas?:string[];
}