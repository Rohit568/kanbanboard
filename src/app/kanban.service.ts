import { Injectable } from '@angular/core';
import { Card } from 'src/model/card';
import { category } from 'src/model/category';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  tasks:Card[]=[];
  tasks2:Card[]=[];
  id = 0;
  id2 = 0;
  
  constructor() { 

  }

  createTask(card :Card){
    this.tasks.push(card);
    for(let c of this.tasks)
    {
      console.log(c.category);
    }
    return "task created";
  }
  getId2(){
    return this.id2;
  }
  setId2(){
    this.id2 = this.id2  + 1;
  }
  getId()
  {
    return this.id;
  }
  setId(){
    this.id = this.id + 1;
  }

  getTask(){
    return this.tasks;
  }
  getTask2(){
    return this.tasks2;
  }
}
