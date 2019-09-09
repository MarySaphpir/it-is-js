import { Component,  OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { DataService } from './flags-data.service';
import { phoneNumberValidator } from './directive/phone-value.validators';
  
@Component({
    selector: 'user-form',
    templateUrl: './user-from.component.html',
    styleUrls: ['./user-form.component.css'],
    providers: [DataService]
})
export class UserFormComponent implements OnInit{ 
    countries: object[] = [];
    myForm : FormGroup;
    countrySrc: any;
    isRed: boolean= false;
    isShowImage: boolean=false;
    isShowText: boolean=false;
    constructor(private formBuilder: FormBuilder, private dataService: DataService){}
     
    initForm() {
       this.myForm = this.formBuilder.group({

            "userName": ["", [Validators.required]],
            "userSurname": ["", [Validators.required]],
            "userCountry": ["", [Validators.required]],
            "userEmail": ["", [Validators.required, Validators.email]],
            "userPhone": ["", [Validators.required, phoneNumberValidator]],
            "userPassword": ["", [Validators.required, Validators.minLength(6)]],
            "confirmPassword": ["", [Validators.required, Validators.minLength(6)] ],
            "checkbox_agree": [false, Validators.requiredTrue]
        });
    }

    ngOnInit(){  
        this.initForm();
        this.countries = this.dataService.getData();
    }

    onBlurCountryInput(value: string, event: any) {
        if (value){
            this.countrySrc = this.countries.find((country: any) => {
              return (country.name === value) ? country.src : undefined;
        })
            if(this.countrySrc) {
                this.isShowImage = true;
            }else {
                 this.isShowText = true;
                 this.isRed = true;
            }
        } 
    }

    submit(){
        console.log(this.myForm);
    }

};