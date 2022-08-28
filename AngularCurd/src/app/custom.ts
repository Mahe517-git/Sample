import { AbstractControl } from '@angular/forms';
export function customValidater(control: AbstractControl) {
if (control.value.substring(0, 1)!=control.value.substring(0, 1).toUpperCase()) {
         return { titleCase: true };
    }
  return null;
}