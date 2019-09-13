import { Component } from '@angular/core';
import {DATA_NUMBERS} from 'src/app/data-numbers.const';

@Component({
    selector: 'app-show-element',
    templateUrl: './show-element.component.html',
    styleUrls: ['./show-element.component.css']
})
export class ShowElementComponent {
    count: number;
    selectNumber: any;
    numbers = DATA_NUMBERS;
    showNumber: boolean;

    counterNum(indicator: number) {
        this.count = indicator;
        this.findNumOfNumbers();
    }

    findNumOfNumbers() {
        this.selectNumber = this.numbers.find(({id, num}) => id === this.count);
    }
}
