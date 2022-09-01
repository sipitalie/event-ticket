import { Areas } from "./Areas";
import { Flayer } from "./Flayer";

export type Event={
    id:string;
    owner_id:string;
    title:string;
    created_at:string;
    flyers?:Flayer[];
    flyer?:Flayer;
    areas:Areas[];
}

