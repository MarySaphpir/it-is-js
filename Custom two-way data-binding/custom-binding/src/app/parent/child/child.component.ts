import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

    // tslint:disable-next-line:no-inferrable-types
    count: number = 0;

    @Output() counterChange: EventEmitter<number>;
    constructor() {
        this.counterChange = new EventEmitter();
    }

    @Input() get counter() {
        return this.count;
    }

    set counter(val) {
        this.count = val;
    }

    increment() {
        this.count = this.count + 1;
        this.counterChange.emit(this.count);
    }

    decrement() {
        this.count = this.count - 1;
        this.counterChange.emit(this.count);
    }

    ngOnInit() {
    }

}
