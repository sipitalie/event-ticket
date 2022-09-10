import { randomUUID } from "crypto";
export type FlayerProps={
    id?:string;
    url_flyer:string;
    event_id:string;
   
}
export type EventProps={
    id?:string
    owner_id:string;
    title:string;
    event_date:string;
    number_of_areas:number
    created_at?:string;
    flyers?:string[];
    flyer?:string;
    areas?:string[];
}
export class Flayer{
    id:string;
    url_flyer:string;
    event_id:string;
    
    constructor (private props:FlayerProps){ 
        if(props.event_id.length<5){
            throw new Error("Invalid event_id")
        }

        if(props.url_flyer.length<20){
            throw new Error("Invalid url")    
        }

        this.id=!!props.id?props.id:randomUUID()
        this.url_flyer=props.url_flyer
        this.event_id=props.event_id   
    }

    updateUrlFlyer(input:Input){
        if(input.url_flyer.length<20){
            throw new Error("Invalid url")    
        }
        this.url_flyer===input.url_flyer   
    }
   
}

type Input={
    url_flyer:string;
}