import { AbstractControl } from "@angular/forms";
export function domainValidation(control:AbstractControl){
    var domain=control.value.split('@');
    if(domain[1]!='gmail.com'){
           return {domain:true}
    }
     return null;
}