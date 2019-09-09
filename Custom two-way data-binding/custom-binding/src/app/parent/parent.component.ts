import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    // tslint:disable-next-line:no-inferrable-types
    num: number = 10;

    constructor() { }

    ngOnInit() {
    }

}
