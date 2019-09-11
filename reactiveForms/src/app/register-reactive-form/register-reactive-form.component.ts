import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckPasswords } from 'src/app/register-reactive-form/utility-validation-confirmPassword';
import { CountriesFlag } from 'src/app/register-reactive-form/utility-contry-flag';

@Component({
    selector: 'app-register-reactive-form',
    templateUrl: './register-reactive-form.component.html',
    styleUrls: ['./register-reactive-form.component.css']
})
export class RegisterReactiveFormComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    countries = new CountriesFlag();
    flagMassege = false;
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

    get myFormControls() {
        return this.registerForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return false;
        }
        console.log(this.registerForm.value);
    }

    onShowFlag(value: string, event: any) {
        this.objectCountry = this.countries.getCountry();
        if (value) {
            const flag = this.objectCountry.find(({ title }) => title === value);
            this.flagSrc = flag
            ? flag.src
            : '';
            this.flagSrc
            ? this.flagImage = true
            : this.flagMassege = true;
        }
    }
}

