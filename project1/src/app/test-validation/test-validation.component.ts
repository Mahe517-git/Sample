import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-test-validation',
  templateUrl: './test-validation.component.html',
  styleUrls: ['./test-validation.component.css']
})
export class TestValidationComponent implements OnInit {

   empForm:FormGroup
   submited:boolean=false;
   hobies:string[]=[]
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
   this.empForm=this.fb.group({
        name:['',Validators.required],
        lname:[''],
        gender:['1',Validators.required],
        mobile:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('^[0-9]*$')]],
        email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
        hobies:['']
   })
  }

  get f(){  return this.empForm.controls }

  save(){
    this.submited=true;
    console.log(this.empForm.value)
  }

  change(event:any){
     if(event.checked){
      this.hobies.push(event.value)
     }else{
      var index=this.hobies.indexOf(event.value)

      this.hobies.splice(1,index)
     }
    // this.empForm.get('hobies').setValue('null')
  }

}
