import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'counter-comp',
    templateUrl: './counter.component.html',
  })
  export class CounterComponent {
    count = 0;
    @Output() onChanged  = new EventEmitter();
    
    change(value = false) {
        this.onChanged.emit(value);
        value ? this.count++ : this.count--;
    }

}
