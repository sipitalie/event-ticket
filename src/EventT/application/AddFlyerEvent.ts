import { EventInterfaceRepository } from "../domain/repository/EventRepositoryInterface";
import { FlyerInterfaceRepository } from "../domain/repository/FlyerRepositoryInterface";

type Props={
    readonly eventRepository:EventInterfaceRepository;
    readonly flyerRepository:FlyerInterfaceRepository;
}
export class AddFlyerEvent {
    constructor(private readonly props: Props){     
    }

    async execute (input:Input):Promise<void>{
        const event = await this.props.eventRepository.find(input.event_id)
        if(input.flyers.length===0){
            throw new Error("Invalid list")
        }
        event.addFlyers(input.flyers)
        await this.props.eventRepository.save(event)
    };  
}

type Input={
    event_id:string,
    flyers:string[];
}