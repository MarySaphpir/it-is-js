import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
     selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
     styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    count = 0;
    counterChange(val: number) {
        return this.count = val;
    }
}
