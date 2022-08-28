import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:'manage',component:CustomerComponent,
  children:[{path:'addCustomer',component:AddCustomerComponent},
  {path:'customerList',component:CustomerListComponent}]}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
