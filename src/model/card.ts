import { category } from "./category";

export interface Card{
    id :number
    title:String;
    category:string;
    comments:String;
    assignedTo:String;
    section:number;

}

export interface Cat{
    key:string;
    value: string;
}