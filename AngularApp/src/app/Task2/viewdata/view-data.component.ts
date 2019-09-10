import { Component, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../../servises/data.servise';

@Component({
    selector: 'view-data',
    templateUrl: './view-data.component.html',
    providers: [DataService]
  })
  export class ViewDataComponent {
    count:any;
    countries:object[]=[];
    country:object;
    isShowImage = false;
    isShowText = false;

    constructor(private dataService: DataService){}

    @Input()
    get numberValue() {
        return this.count;
    }
    
    set numberValue(val) {
        this.count = val;
    }
    ngOnInit(){  
        this.countries = this.dataService.getData();
    }
    
    ngOnChanges() {
        this.onCountryIdSearch(this.count);
            if (!this.country) {
                this.isShowText = true;
                this.isShowImage = false;
            } else {
                this.isShowText = false;
        }
    }

    onCountryIdSearch(id: any) {
        this.country = this.countries.find((country: any) => country.id == id);
            if(this.country) {
                this.isShowImage = true;
        } 
    }
    
}