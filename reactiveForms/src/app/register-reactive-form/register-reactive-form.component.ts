import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckPasswords } from 'src/app/register-reactive-form/password.validator';
import { COUNTRIES } from 'src/app/register-reactive-form/contries.constant';

@Component({
    selector: 'app-register-reactive-form',
    templateUrl: './register-reactive-form.component.html',
    styleUrls: ['./register-reactive-form.component.css']
})
export class RegisterReactiveFormComponent implements OnInit {
    registerForm: FormGroup;
    countries = COUNTRIES;
    submitted = false;
    ErrorMassege = false;
    flagImage = false;
    objectCountry: any;
    flagSrc: string;

    get myFormControls() {
        return this.registerForm.controls;
    }

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
        }, { validator: CheckPasswords.checkPassword });
    }

    validationMassege(fControlName: string) {
        return this.myFormControls[fControlName].touched && this.myFormControls[fControlName].invalid;
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

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return false;
        }
    }
}

