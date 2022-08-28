import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submited:boolean=false;

  constructor(private fb:FormBuilder) { }
 
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      login:['',Validators.required],
      password:['',Validators.required]
    })
  }


    get f(){
      return this.loginForm.controls
    }


  login(){
    this.submited=true;

    console.log(this.loginForm.value)
  }

}
