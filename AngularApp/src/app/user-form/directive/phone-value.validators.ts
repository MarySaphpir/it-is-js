import { AbstractControl } from '@angular/forms'

export function phoneNumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid =  /^(\+?(\d{1}|\d{2}|\d{3})[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}