import { Component } from '@angular/core';
import { KanbanService } from '../kanban.service';
import { Card } from 'src/model/card';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.css']
})
export class MainboardComponent {

  tasks:Card[]=[];
  task2:Card[]=[];
  task3:Card[]=[];
  task4:Card[]=[];
  
  constructor(private service : KanbanService){
     
 
  }

  ngOnInit(){
    this.tasks = this.service.getTask();
    this.task2 = this.service.getTask2();
    this.task3 = this.service.getTask3();
    this.task4 = this.service.getTask4();
    console.log(this.task2);
    console.log(this.tasks);
  }
  ngOnChange()
  {
    console.log(this.task2.length + " " + this.tasks.length);
    this.tasks = this.service.getTask();
    this.task2 = this.service.getTask2();
    this.task3 = this.service.getTask3();
    this.task4 = this.service.getTask4();
  }
 
}

  

