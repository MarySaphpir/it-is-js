import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input() get counter() {
        return this.count;
    }

    @Output() counterChange: EventEmitter<number>;
    constructor() {
        this.counterChange = new EventEmitter();
    }

    count = 0;

    set counter(indicator) {
        this.count = indicator;
    }

    increment() {
        this.count = ++this.count;
        this.counterChange.emit(this.count);
    }

    decrement() {
        this.count = --this.count;
        this.counterChange.emit(this.count);
    }
}
