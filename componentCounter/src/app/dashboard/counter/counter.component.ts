import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent {
    @Output() counterChange: EventEmitter<number>;
    public count = 0;

    constructor() {
        this.counterChange = new EventEmitter();
    }

    increment() {
        this.count++;
        this.counterChange.emit(this.count);
    }

    decrement() {
        this.count--;
        this.counterChange.emit(this.count);
    }
}
