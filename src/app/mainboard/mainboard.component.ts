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
  task2:Card[]=[]
  constructor(private service : KanbanService){
     
 
  }

  ngOnInit(){
    this.tasks = this.service.getTask();
    console.log(this.tasks);
  }
 
}

  

