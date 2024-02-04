import { Component, Input } from '@angular/core';
import { KanbanService } from 'src/app/kanban.service';
import { Card } from 'src/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  isFeature: boolean = true;
  s:String="";
  constructor(private service : KanbanService){}
  @Input() cards: any;
  
  ngOnInit(){

     
     this.s = ""+this.cards.category;

     if(this.s !== 'FEATURE')
     {
      this.isFeature = false;
     }
     else
     {
      this.isFeature = true;
     }
     
  }
  onSectionChange(id : number, section : number)
{
  console.log(id + " " + localStorage.getItem("user"));
    this.service.changeSection(id, section);
}

getBorderColor(): string{
  if (this.cards.section == 1) {
    return 'red'; // Change to your desired color for section 1
  } else if (this.cards.section == 2) {
    return 'orange'; // Change to your desired color for section 2
  } else if(this.cards.section == 3) {
    return 'black'; // Default color or for other sections
  }
  else
     return 'green';
}

}
