import { FormGroup } from "@angular/forms";
import { AbstractControl } from '@angular/forms'

export class UserFormValidators {
    constructor() {}
    
    static phoneNumberValidator(
        control: AbstractControl
        ): { [key: string]: any } | null {
        const valid =  /^(\+?(\d{1}|\d{2}|\d{3})[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(control.value)
        return valid
          ? null
          : { invalidNumber: { valid: false, value: control.value } }
      }

    static matchPasswordsValidator(formGroup: FormGroup) {
        const password = formGroup.get('password');
        const confirmPassword = formGroup.get('confirmPassword');
        
        if (!password || !confirmPassword|| !password.value || !confirmPassword.value) {
            return null;
        }
        if (confirmPassword.errors && !confirmPassword.errors.matchValueError) {
            return null;
        }
        if (password.value !== confirmPassword.value) {
            confirmPassword.setErrors({ matchValueError: true });
        } else {
            confirmPassword.setErrors(null);
        }
    }
}
