import { FormGroup } from '@angular/forms';

export class CheckPasswords {
    static checkPassword(group: FormGroup) {
        const pass = group.get('password').value;
        const confirmPass = group.get('confirmPassword').value;
        return pass === confirmPass ? false : { notSame: true };
    }
}
