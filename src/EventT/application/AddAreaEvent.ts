import { AreaInterfaceRepository } from "../domain/repository/AreaRepositoryInterface";
import { EventInterfaceRepository } from "../domain/repository/EventRepositoryInterface";



type EventDependeceObject={
    readonly eventRepository:EventInterfaceRepository;
    readonly areaRepository:AreaInterfaceRepository;
}
export class AddAreaEvent {
    constructor(private readonly props: EventDependeceObject){     
    }

    async execute (input:Input):Promise<void>{
        const event = await this.props.eventRepository.find(input.event_id)
        if(event.number_of_areas!==input.areas.length){
            throw new Error("Invalid number of areas")
        }
        
        event.addAreas(input.areas)
        await this.props.eventRepository.save(event)
    };
   
}

type Input={
    event_id:string,
    areas:string[];
}