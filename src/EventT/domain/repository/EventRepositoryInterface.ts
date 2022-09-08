import { Event } from "../entity/Event";

export interface EventInterfaceRepository{
    save:(input:Input)=>Promise<string>;
    find:(event_id:string)=>Promise<Event>;
    findAll:()=>Promise<Event[]>;
    get_events_Owner:(owner_id:string)=>Promise<Event[]>;
}
type Input={
    owner_id:string;
    title:string;
    number_of_areas:number;
    event_date:string;
    flyers?:string[];
    flyer?:string;
    areas:string[];
}