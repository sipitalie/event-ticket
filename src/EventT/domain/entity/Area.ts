import {randomUUID} from "node:crypto"

type Category="NORMAL"|"VIP"|"MESA"
export interface AreaProps{
    event_id:string;
    category:string;
    price:number;
    number_of_peaple:number;
    description?:string;  
}
export class Area{
    event_id:string;
    id:string;
    category:string;
    price:number;
    number_of_peaple:number;
    description?:string;

    constructor (readonly props:AreaProps){  
        if(props.category.length===0){

            throw new Error("Invalid category")
        }
        if(props.number_of_peaple<=0){
            throw new Error("Invalid number of peaple")
        }

        if(props.price<0){
            throw new Error("Invalid category")    
        }
        if(!!props.description&&props.description.length>256){
            throw new Error("Invalid description.length cannot be longer than 256 characters")    
        }

        this.id=randomUUID()
        this.price=props.price
        this.number_of_peaple=props.number_of_peaple
        this.category=props.category
        this.event_id=props.event_id
        this.description=!!props.description?props.description:""
    }
}


