import { Component } from '@angular/core';



@Component({
  selector: 'app-drawercontent',
  templateUrl: './drawercontent.component.html',
  styleUrls: ['./drawercontent.component.css']
})
export class DrawercontentComponent {
  username !:string ;
  constructor(){
  
  }

  ngOnInit(){
    this.username = localStorage.getItem("user")??"John Doe";
  }
}
