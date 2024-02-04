import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainboardComponent } from './mainboard/mainboard.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './home/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './mainboard/card/card.component';
import { LoginComponent } from './login/login.component';
import { DrawercontentComponent } from './drawercontent/drawercontent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainboardComponent,
    HomeComponent,
    DialogComponent,
    CardComponent,
    LoginComponent,
    DrawercontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
