import { Flyer } from "../entity/Flyer";

export interface FlyerInterfaceRepository{
    save:(input:Input)=>Promise<string>;
    find:(flyer_id:string)=>Promise<Flyer>;
    find_all:(event_id:string)=>Promise<Flyer[]>;
}
type Input={
    event_id:string,
    id:string,
    url:string,
}