import { AreaInterfaceRepository } from "../domain/repository/AreaRepositoryInterface";

export class CreateArea{
    constructor(readonly areaRepository: AreaInterfaceRepository){    
    }

    async execute (input:Input):Promise<string[]>{
        let areas= []
        for( let value of input.areas){
            const area = await this.areaRepository.save({
                event_id:input.event_id,
                number_of_peaple:value.number_of_peaple,
                price:value.price,
                title:value.title,
                description:!!value?.description?value.description:""
            })
            areas.push(area)
        }
        return  areas
    };
   
}

type Input={
    event_id:string;
    areas:{ 
        title:string;
        price:number;
        number_of_peaple:number;
        description?:string;
    }[];
}