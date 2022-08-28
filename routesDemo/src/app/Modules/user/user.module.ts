import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MypipePipe } from './mypipe.pipe'

@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    AddUserComponent,
    MypipePipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class UserModule { }
