import { FormGroup } from '@angular/forms';

export function CheckPasswords (group: FormGroup) {
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? false : { notSame: true };
    }

