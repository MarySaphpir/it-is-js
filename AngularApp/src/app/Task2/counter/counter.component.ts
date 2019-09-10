import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'counter-comp',
    templateUrl: './counter.component.html',
  })
  export class CounterComponent {
    count = 0;
    @Output() onChanged  = new EventEmitter();
    
    change(increased:any) {
        this.onChanged.emit(increased);
        increased==true?this.count++:this.count--;
    }

}
