import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CounterComponent } from './dashboard/counter/counter.component';
import { ShowElementComponent } from './dashboard/show-element/show-element.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CounterComponent,
    ShowElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
