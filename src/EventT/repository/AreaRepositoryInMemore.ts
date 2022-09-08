import { AreaInterfaceRepository } from "../domain/repository/AreaRepositoryInterface";
import { Area } from "../domain/entity/Area";


export  class AreaRepositoryInMemory implements AreaInterfaceRepository{
    areas:Area[]
    constructor(){
        this.areas=[] 
    }
    async save(input:Input):Promise<string>{
        const area=new Area({
            category:input.category,
            event_id:input.event_id,
            number_of_peaple:input.number_of_peaple,
            price:input.price,
            description:input.description
        })
        this.areas.push(area)
        return area.id
    }
    async find(area_id:string):Promise<Area>{
        const area= this.areas.find(area=>area.id===area_id)
        if(!area)throw new Error(`Area not found`);
        return  area   
    }

    async find_all(event_id: string):Promise<Area[]>{
        const area= this.areas.filter(area=>area.event_id===event_id)
        if(!area)throw new Error(`Area not found for event`);
        return  area 
    }
}

type Input={
    event_id:string;
    category:string;
    price:number;
    number_of_peaple:number;
    description?:string;
}