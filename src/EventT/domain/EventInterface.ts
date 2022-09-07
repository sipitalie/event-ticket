import { Event } from "./entity/Event";

export interface EventInterface{
    create:(input:Input)=>Promise<string>;
    find:(event_id:string)=>Promise<Event>;
    getAll:()=>Promise<Event[]>;
    getEventsOwner:(owner_id:string)=>Promise<Event[]>;
}

type Input={
    owner_id:string;
    title:string;
    flyers:string[];
    areas:string[];

}