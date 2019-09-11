import { Component,  OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserFormValidators } from './form-validators/user-form.validator';
import { countriesData } from './countries-data';
  
@Component({
    selector: 'user-form',
    templateUrl: './user-from.component.html',
    styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit{ 
    countries: any[] = [];
    userForm : FormGroup;
    countrySrc: any;
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

    onBlurCountryInput(value: string, event: any) {
        if (value) {
            this.countrySrc = this.countries.find((country: any) => {
              return (country.name === value) ? country.src : null;
        })
            if(this.countrySrc) {
                this.isShowImage = true;
                this.isShowText = false;
                this.isInvalidField = false;
            } else {
               this.isShowText = true;
               this.isInvalidField = true;
            }
        } 
    }

    displayErrorFor(field: string) {
        return (this.userForm.get(field).invalid && (this.userForm.get(field).touched || this.userForm.get(field).dirty) );  
    }

    submit() {
        console.log(this.userForm);
    }
};