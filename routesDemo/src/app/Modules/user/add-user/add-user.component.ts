import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  empForm:FormGroup;
  submited:boolean=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
      this.empForm=this.fb.group({
            fName:['',Validators.required],
            mName:['',Validators.required],
            lName:['',Validators.required],
            gender:['1'],
            mobile:['',Validators.required],
            email:['',Validators.required],
      })
  }


  get f(){
    return this.empForm.controls;
  }

  save(){
    this.submited=true;
    console.log(this.empForm)
  }

}
