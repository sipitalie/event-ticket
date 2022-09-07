import {randomUUID} from "node:crypto"
import { Area } from "../domain/entity/Area";
import { EventInterfaceRepository } from "../domain/repository/EventRepositoryInterface";
import { CreateArea } from "./CreateArea";
import { CreateFlayer } from "./CreateFlayer";


type EventDependeceObject={
    readonly eventRepository:EventInterfaceRepository;
    readonly createArea:CreateArea;
    readonly createFlayer:CreateFlayer;   
}
export class CreateEvent {
    constructor(readonly props: EventDependeceObject){  
        
    }

    async execute (input:Input):Promise<string>{
        const id =randomUUID()
        const areas = await this.props.createArea.execute({event_id:id,areas:input.areas})
        const flayers= await this.props.createFlayer.execute({event_id:id,flyers:input.flyers})
        await this.props.eventRepository.save_event({
            owner_id:`user-${randomUUID()}`,
            title:"Siga la Luna",
            areas: areas,
            flayers:flayers,
            
        })
        return id
    };
   
}

type Input={
    owner_id:string;
    title:string;
    flyers:string[];
    areas:Area[];
}