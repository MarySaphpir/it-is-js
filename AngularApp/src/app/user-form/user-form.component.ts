import { Component,  OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserFormValidators } from './form-validators/user-form.validator';
import { countriesData } from './countries-data';
import { Country } from './form-models/country-model';
  
@Component({
    selector: 'user-form',
    templateUrl: './user-from.component.html',
    styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit{ 
    countries: Country[] = [];
    userForm : FormGroup;
    country: Country;
    inputValue: string;
    isInvalidField = false;
    isShowImage = false;
    isShowText = false;
    constructor(private formBuilder: FormBuilder){}
     
    initForm() {
       this.userForm = this.formBuilder.group({

            "name": ["", [Validators.required]],
            "surname": ["", [Validators.required]],
            "country": ["", [Validators.required]],
            "email": ["", [Validators.required, Validators.email]],
            "phone": ["", [Validators.required, UserFormValidators.phoneNumberValidator]],
            "password": ["", [Validators.required, Validators.minLength(6)]],
            "confirmPassword": ["", [Validators.required, Validators.minLength(6)] ],
            "checkbox_agree": [false, Validators.requiredTrue]
        },  {validator: UserFormValidators.matchPasswordsValidator });
    }

    ngOnInit() {  
        this.initForm();
        this.countries = countriesData;
    }

    onBlurCountryInput(value: string) {
        if (value) {
            this.inputValue = value;
            this.country = this.countries.find((country: Country) => {
                return country.name === value;
        })}
        this.country? this.toggleErrorText(this.country, false) : this.toggleErrorText(this.country, true);
    } 
    
    displayErrorFor(field: string) {
        return (this.userForm.get(field).invalid && (this.userForm.get(field).touched || this.userForm.get(field).dirty) );  
    }

    toggleErrorText(value :Country, val:any) {
       this.isShowImage = value ? true : false;
       this.isShowText = val;
       this.isInvalidField = val;
    }

    submit() {
        console.log(this.userForm);
    }
};