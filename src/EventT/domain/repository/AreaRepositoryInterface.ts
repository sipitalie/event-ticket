import { Area } from "../entity/Area";
export interface AreaInterfaceRepository{
    save:(input:Input)=>Promise<string>;
    find:(area_id:string)=>Promise<Area>;
    find_all:(event_id:string)=>Promise<Area[]>;
}
type Input={
    event_id:string;
    id:string,
    category:string;
    price:number;
    number_of_peaple:number;
    description?:string;
}