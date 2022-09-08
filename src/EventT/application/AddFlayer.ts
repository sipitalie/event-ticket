import { Area } from "../domain/entity/Area";
import { AreaInterfaceRepository } from "../domain/repository/AreaRepositoryInterface";

export class CreateArea{
    constructor(private readonly areaRepository: AreaInterfaceRepository){    
    }

    async execute (input:Input):Promise<string[]>{
        let areas= []
        for( let value of input.areas){
            const area =new Area({
                event_id:input.event_id,
                number_of_peaple:value.number_of_peaple,
                price:value.price,
                category:value.category,
                description:!!value?.description?value.description:""
            })
            const area_id = await this.areaRepository.save(area)
            areas.push(area_id)
        }
        return  areas
    };
   
}

type Input={
    event_id:string;
    areas:{ 
        category:string;
        price:number;
        number_of_peaple:number;
        description?:string;
    }[];
}