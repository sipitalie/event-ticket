import { Flayer } from "../entities/Event";

export interface EventInterfaceRepository{
    save:(input:Input)=>Promise<string>;
    find:(flyer_id:string)=>Promise<Flayer>;
    get_all:(event_id:string)=>Promise<Flayer[]>;
}
type Input={
    event_id:string,
    url:string,
    id:string,
}