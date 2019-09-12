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
        this.count += 1;
        this.counterChange.emit(this.count);
    }

    decrement() {
        this.count -= 1;
        this.counterChange.emit(this.count);
    }
}
