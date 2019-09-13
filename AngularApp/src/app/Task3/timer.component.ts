import {Component, OnInit} from '@angular/core'; 
import { Subscription, Observable, interval} from 'rxjs';
import { map } from 'rxjs/operators';

const timeEnds = new Date("September 14, 2019 18:00:00");

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
  })
  export class TimerComponent implements OnInit {
    timeObject: any;
    counter: Observable<number>;
    subscription: Subscription;

    constructor() {}

    ngOnInit() {  
       this.counter = interval(1000).pipe(
            map((x) => {
            return Math.floor(timeEnds.getTime() - new Date().getTime())
         }));
         this.subscription = this.counter.subscribe((x) => this.timeObject = this.createTimeObject(x));
   }
       
    createTimeObject(date) {
        let time = {days: 0, hours: 0, minutes: 0, seconds: 0};
        time.days = Math.floor(date / (1000 * 60 * 60 * 24));
        time.hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        time.minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
        time.seconds = Math.floor((date % (1000 * 60)) / 1000);
        return time;
    }

   ngOnDestroy() {
          this.subscription.unsubscribe();
    }
  }