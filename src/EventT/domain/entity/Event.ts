import { randomUUID } from "crypto";

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
export class Event{
    id:string;
    owner_id:string;
    number_of_areas:number;
    private publish?:boolean;
    title:string;
    event_date:string;
    created_at?:string;
    flyers:string[];
    flyer:string;
    areas:string[];

    constructor (private readonly props:EventProps){  
        this.id=!!props.id?props.id:randomUUID()
        this.owner_id=props.owner_id
        this.title=props.title
        this.event_date=props.event_date,
        this.created_at=props.created_at??props.created_at
        this.publish=false
        this.number_of_areas=props.number_of_areas
        this.flyers=!!props.flyers?props.flyers:[]
        this.areas=!!props.areas?props.areas:[]
        this.flyer=!!props.flyer?props.flyer:""
       
        
    }

    publishEvent(){
        if(this.flyers.length===0){
            throw new Error("Empty flayer url list")
        }
        if(!!this.flyer){
            throw new Error("Empty flayer url")
        }
        if(this.areas.length===0){
            throw new Error("Empty areas list")
        }

        this.publish=true

    }
    isVisible(){
        return this.publish===true
    }

    addFlyers(flyers:string[]){
        if(flyers.length===0){
            throw new Error("Empty flayer list")
        }
        if(flyers.length>10){
            throw new Error("List of flyers cannot be greater than 10")
        }
        if(flyers.length===1){
            this.addFlyerMain(flyers[0])
        }
        for(const url of flyers){
            this.flyers.push(url)
        }
        
    }

    addFlyerMain(flyer:string){
        if(!!flyer){
            throw new Error("Empty flayer url")
        }
        this.flyer=flyer
    }

    async addAreas(areas:string[]):Promise<void>{
        if(areas.length===0){
            throw new Error("Empty areas list")
        }
        if(areas.length>this.number_of_areas){
            throw new Error(`List of areas cannot be greater than ${this.number_of_areas}`)
        }
        for(const id of areas){
            this.areas.push(id)
        }

    }
}
