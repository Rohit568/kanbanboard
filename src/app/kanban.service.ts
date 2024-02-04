import { Injectable } from '@angular/core';
import { Card } from 'src/model/card';
import { category } from 'src/model/category';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  

  tasks:Card[]=[];
  tasks2:Card[]=[];
  tasks3:Card[]=[];
  tasks4:Card[] = [];
  id = 0;
 
  
  constructor() { 
    this.tasks = [
      {id : 100, title :"hey", category:  "BUG", comments: "hey is used  to call someone", assignedTo:"rohit", section : 1},
      {id: 300,title :"hii", category:  "FEATURE", comments: "when you first meet", assignedTo:"shivam", section : 1}
  ];
  }


  createTask(card :Card){
    console.log("jlkgdj" +  card);
    this.tasks.push(card);
    for(let c of this.tasks)
    {
      console.log(c.category);
    }
    return "task created";
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
  getTask3(){
    return this.tasks3;
  }
  getTask4(){
    return this.tasks4;
  }

  changeSection(id: number, section: number) {

    

    if(section == 1){


      const taskToMove = this.tasks.find(c => c.id === id);

      if (taskToMove) {
        // Remove the task from this.tasks
        const indexToRemove = this.tasks.findIndex(card => card.id === id);
        this.tasks.splice(indexToRemove, 1);
    
        // Update the section and move it to this.tasks2
        taskToMove.section = 2;
        this.tasks2.push(taskToMove);
      } else {
        console.log("Task with ID not found in this.tasks");
      }
  
    }
    else if(section == 2){

      const taskToMove = this.tasks2.find(c => c.id === id);

      if (taskToMove) {

        
        // Remove the task from this.tasks
        const indexToRemove = this.tasks2.findIndex(card => card.id === id);
        this.tasks2.splice(indexToRemove, 1);
    
        // Update the section and move it to this.tasks2
        taskToMove.section = 3;
        this.tasks3.push(taskToMove);
      } else {
        console.log("Task with ID not found in this.tasks");
      }
    }
    else if(section == 3){

      
      const taskToMove = this.tasks3.find(c => c.id === id);

      if (taskToMove) {

        
        // Remove the task from this.tasks
        const indexToRemove = this.tasks3.findIndex(card => card.id === id);
        this.tasks3.splice(indexToRemove, 1);
    
        // Update the section and move it to this.tasks2
        taskToMove.section = 4;
        this.tasks4.push(taskToMove);
      } else {
        console.log("Task with ID not found in this.tasks");
      }
     
    }
    else
    {
      
    }

  }
}
