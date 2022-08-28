import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { LoginComponent } from './login/login.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [{path:'addEmployee',component:AddEmployeeComponent},
{path:'list',component:EmployeelistComponent},
{path:"login",component:LoginComponent},
{path:"Observables",component:ObservablesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
