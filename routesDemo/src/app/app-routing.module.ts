import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
{path:'login',loadChildren: ()=>import('./Modules/login/login.module').then(m=>m.LoginModule)},
{path:'customer',loadChildren:()=>import('./Modules/customer/customer.module').then(m=>m.CustomerModule)},
{path:'user',loadChildren:()=>import('./Modules/user/user.module').then(m=>m.UserModule)},
{path:'test',component:TestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
