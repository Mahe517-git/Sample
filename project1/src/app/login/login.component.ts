import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted:boolean=false;
  constructor(private fb:FormBuilder) {   }

  ngOnInit(): void {

   this.loginForm=this.fb.group({
    userName:[,Validators.required],
    password:[,Validators.required],
   });
   console.log(this.loginForm)
  }

  login(){
    this.submitted = true;

     console.log(this.loginForm)
  }
  reset(){

    this.loginForm.reset();
  }

 get f(){return this.loginForm.controls;}
}
