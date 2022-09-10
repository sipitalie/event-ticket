import {randomUUID} from "node:crypto"
import { Flyer } from "../domain/entity/Flyer";
import { FlyerInterfaceRepository } from "../domain/repository/FlyerRepositoryInterface";


export class CreateFlayer{
    constructor(private flyerRepository: FlyerInterfaceRepository){    
    }

    async execute (input:Input):Promise<string[]>{
        let flyers= []
        for( let value of input.flyers){
            const flyer =new Flyer({
                event_id:input.event_id,
                url_flyer:value
            })
            const flyer_id = await this.flyerRepository.save({
                url:flyer.url_flyer,
                id:flyer.id,
                event_id:flyer.id
            })
            flyers.push(flyer_id)
        }
        return flyers
    };
   
}


type Input={
    event_id:string;
    flyers:string[];
}