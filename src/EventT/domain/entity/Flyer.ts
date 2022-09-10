import { randomUUID } from "crypto";


export type FlyerProps={
    id?:string;
    url_flyer:string;
    event_id:string;
   
}

export class Flyer{
    id:string;
    url_flyer:string;
    event_id:string;
    
    constructor (private props:FlyerProps){ 
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