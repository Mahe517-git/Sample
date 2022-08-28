import { FormGroup } from "@angular/forms";

export function mustMatch(control1:string,control2:string){
   return (form:FormGroup)=>{
    //debugger
   const name=form.controls[control1];
   const lastName=form.controls[control2]
   if(name.value!=lastName.value){
    lastName.setErrors({matched:true})
   }else{
    null
   }

   }
}