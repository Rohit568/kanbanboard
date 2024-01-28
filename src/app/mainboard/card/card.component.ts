import { Component, Input } from '@angular/core';
import { Card } from 'src/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  isFeature: boolean = true;
  s:String="";
  constructor(){}
  @Input() cards: any;
  
  ngOnInit(){

     console.log(this.cards.category);
     this.s = ""+this.cards.category;

     if(this.s !== 'FEATURE')
     {
      this.isFeature = false;
     }
     else
     {
      this.isFeature = true;
     }
     console.log(this.isFeature);
  }


}
