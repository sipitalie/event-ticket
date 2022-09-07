import {randomUUID} from "node:crypto"
import { FlayerInterfaceRepository } from "../domain/repository/FlayerRepositoryInterface";


export class CreateFlayer{
    constructor(readonly flayerRepository: FlayerInterfaceRepository){    
    }

    async execute (input:Input):Promise<string[]>{
        let flayers= []
        for( let value of input.flyers){
            const flayer = await this.flayerRepository.save({
                event_id:input.event_id,
                id:randomUUID(),
                url:value    
            })
            flayers.push(flayer)
        }
        return flayers
    };
   
}

type Input={
    event_id:string;
    flyers:string[];
}