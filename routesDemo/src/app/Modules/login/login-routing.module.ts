import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router'
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes:Routes=[
  {path:'user',component:LoginComponent,
children:[ 
  {path:'signup',component:SignupComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent}]}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LoginRoutingModule { }
