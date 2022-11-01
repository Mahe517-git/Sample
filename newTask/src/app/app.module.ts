import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Task1Component } from './task1/task1.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {HttpClientModule} from '@angular/common/http';
import { ColumnMapingComponent } from './column-maping/column-maping.component';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    Task1Component,
    ColumnMapingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListboxModule,NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
