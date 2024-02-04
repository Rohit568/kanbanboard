import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';




const materialComponent = [
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatTreeModule

  
]
@NgModule({
  declarations: [],
  imports: [
    materialComponent
  ],
  exports:[
     materialComponent
  ]
})
export class MaterialModule { }
