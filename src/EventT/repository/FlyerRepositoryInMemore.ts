
import { Flyer } from "../domain/entity/Flyer";
import { FlyerInterfaceRepository } from "../domain/repository/FlyerRepositoryInterface";


export  class FlyerRepositoryInMemory implements FlyerInterfaceRepository{
    flyers:Flyer[]
    constructor(){
        this.flyers=[] 
    }
    async save(input:Input):Promise<string>{
        const flyer=new Flyer({event_id:input.event_id,url_flyer:input.url})
        this.flyers.push(flyer)
        return flyer.id
    }
    async find(flyer_id:string):Promise<Flyer>{
        const flyer= this.flyers.find(flayer=>flayer.id===flyer_id)
        if(!flyer)throw new Error(`Flyer not found`);
        return  flyer  
    }

    async find_all(event_id: string):Promise<Flyer[]>{
        const flyers= this.flyers.filter(flyer=>flyer.event_id===event_id)
        if(!flyers)throw new Error(`Flyers not found for event`);
        return flyers
    }
}

type Input={
    event_id:string;
    url:string;
}