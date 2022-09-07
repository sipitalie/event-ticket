export interface Area{
    id:string;
    title:string;
    price:number;
    number_of_peaple:number;
    description?:string;
    execute?:(input:any)=>Promise<string>

}