export type Event={
    id:string;
    owner_id:string;
    title:string;
    created_at:string;
    flyers?:Flayer[];
    flyer?:Flayer;
    areas:Areas[];
}
export type Flayer={
    id:string;
    url_flyer:string

}


export type Areas={
    id:string;
    title:string;
    price:number;
    status:string;//
    number_of_peaple:number;
    description?:string;

}