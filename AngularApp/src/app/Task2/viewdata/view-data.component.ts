import { Component, Input, SimpleChanges } from '@angular/core';
import { countriesData } from '../sourse/countries-data';
import { Country } from '../models/country-model';

@Component({
    selector: 'view-data',
    templateUrl: './view-data.component.html',
  })
  export class ViewDataComponent {
    count:number;
    countries:Country[]=[];
    country:object;
    isShowCountry = false;

    constructor() {}

    @Input()
    get numberValue() {
        return this.count;
    }
    
    set numberValue(inputValue) {
        this.count = inputValue;
    }
    ngOnInit() {  
        this.countries = countriesData;
    }
    
    ngOnChanges() {
        this.onCountryIdSearch(this.count);
        this.country ? this.isShowCountry = true :  this.isShowCountry = false;
    }

    onCountryIdSearch(id: number) {
        this.country = this.countries.find((country: Country) => {
            return country.id === id;
        });
    }  
}