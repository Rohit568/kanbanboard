import { Component } from '@angular/core';
import { TapObserver } from 'rxjs';
import { KanbanService } from '../kanban.service';
import { Card } from 'src/model/card';
import { category } from 'src/model/category';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  
  constructor( private dialog : MatDialog){

  }

  onDividerMouseDown(event:MouseEvent){

  }

 

  createTask(){

console.log(localStorage.getItem("user"));
      let dialogRef = this.dialog.open(DialogComponent, {
        height: '400px',
        width: '500px',
      });
  }
}
