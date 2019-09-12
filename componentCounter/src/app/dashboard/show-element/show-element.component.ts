import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import {dataNumbers} from 'src/app/data-numbers';

@Component({
    selector: 'app-show-element',
    templateUrl: './show-element.component.html',
    styleUrls: ['./show-element.component.css']
})
export class ShowElementComponent implements OnInit, OnChanges {

    @Input() get counterNum() {
        return this.count;
    }

    count: number;
    selectNumber: object;
    numbers = [];
    showNumber: boolean;

    set counterNum(val: number) {
        this.count = val;
    }

    findNumOfNumbers(id: number) {
        this.selectNumber = this.numbers.find((numerics) => numerics.id === id);
    }

    ngOnInit() {
        this.numbers = dataNumbers;
    }

    ngOnChanges() {
        this.findNumOfNumbers(this.count);
        this.selectNumber
        ? this.showNumber = true
        : this.showNumber = false;
    }
}
