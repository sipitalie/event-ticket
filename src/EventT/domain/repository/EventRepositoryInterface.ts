import { Event } from "../entities/Event";

export interface EventInterfaceRepository{
    save_event:(input:any)=>Promise<string>;
    find_event:(event_id:string)=>Promise<Event>;
    get_all_events:()=>Promise<Event[]>;
    get_events_Owner:(owner_id:string)=>Promise<Event[]>;
}
