import { Component } from '@angular/core';
import {dataNumbers} from 'src/app/data-numbers';

@Component({
    selector: 'app-show-element',
    templateUrl: './show-element.component.html',
    styleUrls: ['./show-element.component.css']
})
export class ShowElementComponent {

    count: any;
    selectNumber: object;
    numbers = dataNumbers;
    showNumber: boolean;

    counterNum(val: number) {
        this.count = val;
        this.findNumOfNumbers();
    }

    findNumOfNumbers() {
        this.selectNumber = this.numbers.find((numerics) => numerics.id === this.count);
    }
}
