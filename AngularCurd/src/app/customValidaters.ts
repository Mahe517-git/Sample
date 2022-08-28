import {AbstractControl} from '@angular/forms'
export function validateText(control:AbstractControl) {

  
      if(!isNaN(control.value)){
           return{isNumeric:true}
      }

    return   null
}

 
