import { Component, ViewChild } from '@angular/core';
import { ShowElementComponent } from './show-element/show-element.component';

@Component({
     selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
     styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    count = 0;

    @ViewChild(ShowElementComponent)
    showElem: ShowElementComponent;

    onCounterChange(indicator: number) {
        this.count = indicator;
        this.showElem.counterNum(indicator);
    }
}
