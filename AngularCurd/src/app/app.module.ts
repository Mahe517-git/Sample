import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import {HttpClientModule } from '@angular/common/http';
import { Demo1Component } from './demo1/demo1.component';
import { ChartsComponent } from './charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { BarchatComponent } from './barchat/barchat.component';
import { PiechartComponent } from './piechart/piechart.component';
import { TableComponent } from './table/table.component';
import { TemplatesComponent } from './templates/templates.component';
import { FormArraySampleComponent } from './form-array-sample/form-array-sample.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ChaildComponent } from './chaild/chaild.component';
import { TableDataComponent } from './table-data/table-data.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { LoginGuard } from './login.guard';
import { DeactiveGuard } from './deactive.guard';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Demo1Component,
    ChartsComponent,
    BarchatComponent,
    PiechartComponent,
    TableComponent,
    TemplatesComponent,
    FormArraySampleComponent,
    AddEmployeeComponent,
    ChaildComponent,
    TableDataComponent,
    RxjsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,NgChartsModule
  ],
  providers: [LoginGuard,DeactiveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
