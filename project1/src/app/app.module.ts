import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import{ HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component'
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ObservablesComponent } from './observables/observables.component';
import { OrderByPipe } from './order-by.pipe';
import { TestValidationComponent } from './test-validation/test-validation.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    AddEmployeeComponent,
    LoginComponent,
    ObservablesComponent,
    OrderByPipe,
    TestValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
