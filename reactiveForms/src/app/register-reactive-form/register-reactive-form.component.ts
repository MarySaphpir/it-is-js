import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckPasswords } from 'src/app/register-reactive-form/utility-validation-confirmPassword';
import { countriesAndFlag } from 'src/app/register-reactive-form/utility-contry-flag';

@Component({
    selector: 'app-register-reactive-form',
    templateUrl: './register-reactive-form.component.html',
    styleUrls: ['./register-reactive-form.component.css']
})
export class RegisterReactiveFormComponent implements OnInit {
    registerForm: FormGroup;
    countries = countriesAndFlag;
    submitted = false;
    ErrorMassege = false;
    flagImage = false;
    objectCountry: any;
    flagSrc: string;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            country: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
            acceptRules: [false, Validators.requiredTrue]
        }, { validator: CheckPasswords });
    }

    validationMassege(fControlName: string) {
        return this.myFormControls[fControlName].touched && this.myFormControls[fControlName].invalid;
    }

    get myFormControls() {
        return this.registerForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return false;
        }
    }

    onShowFlag(value: string, event: any) {
        this.objectCountry = this.countries;
        if (value) {
            const flag = this.objectCountry.find(({ title }) => title === value);
            this.flagSrc = flag
            ? flag.src
            : '';
            if (this.flagSrc) {
                this.flagImage = true;
                this.ErrorMassege = false;
            } else {
                this.ErrorMassege = true;
            }
        }
    }
}

