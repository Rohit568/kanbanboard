import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { KanbanService } from 'src/app/kanban.service';
import { Card, Cat } from 'src/model/card';
import { category } from 'src/model/category';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  
  taskForm!: FormGroup;
  cats:Cat[]=[ 
    {key: 'bug', value: 'BUG'},
  {key: 'feature', value: 'FEATURE'}];
  

  constructor(private service : KanbanService, private dialog : MatDialogRef<DialogComponent>, private formBuilder: FormBuilder){
   
  }
  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title: [null, ],
      category: [null, ],
      comment: [null,],
      assignee:[null,]
    });
  }

  onClose(){
    this.dialog.close();
  }
  onSubmit(){

    console.log(this.taskForm.value);
   this.service.setId();
   const obj :Card = {
      id : this.service.getId(),
      title : this.taskForm.value.title, 
      category: this.taskForm.value.category,
      comments: this.taskForm.value.comment,
      assignedTo : this.taskForm.value.assignee
   }

   this.service.createTask(obj);
   this.onClose();
    
  }
}
