import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DashBoardComponent } from './Task2/dashboard/dashboard.component';
import { CounterComponent } from './Task2/counter/counter.component';
import { MatchValueDirective } from './user-form/directive/match-value.directive';
import { ViewDataComponent } from './Task2/viewdata/view-data.component';


@NgModule({
  declarations: [
    AppComponent, 
    DashBoardComponent,
    CounterComponent,
    ViewDataComponent,
    UserFormComponent,
    MatchValueDirective
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
