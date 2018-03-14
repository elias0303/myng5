import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//to add animation feature of angular first npm install @angular/animation/@latest --save
//then we have to import the liberary before start using
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataService} from './data.service';
//to use ng-model for two way data binding
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
