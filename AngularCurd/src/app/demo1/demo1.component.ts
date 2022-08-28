import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, AbstractControl, FormControl} from '@angular/forms'
import { DataService } from '../data.service';

import {customValidater} from '../custom'

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {


  form1:FormGroup;
  constructor(private fb:FormBuilder,private dataService:DataService) { }

  ngOnInit(): void {

    this.form1=this.fb.group({
      fName:['',[Validators.required,customValidater]],
      lName:['',[Validators.required,customValidater]],
      mName:['',[Validators.required,customValidater]]
    })

  }

  // function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
 
  //   if ()) {
  //       return { 'TitleCase': true };
  //   }
  //   return null;
  // }

  get f(){
    return this.form1.controls;
  }

  submited:boolean=false;
  save(){
    this.submited=true;

    if(this.form1.valid){
      this.dataService.saveData(this.form1.value).subscribe(
        res=>{alert("data saved successfully");;}
      )
      //this.form1.reset()
    }
  
  }

  cancel(){
    this.form1.reset();
  }

}

// export function (c: FormControl) {
//   let regex = /[a-z]/g
//   if (regex.test(c.value)) {
//     return null;
//   } else {
//     return { lowercase: true }
//   }
// }
