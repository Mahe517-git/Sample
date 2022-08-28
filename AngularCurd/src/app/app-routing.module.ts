import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { BarchatComponent } from './barchat/barchat.component';
import { ChartsComponent } from './charts/charts.component';
import { Demo1Component } from './demo1/demo1.component';
import { FormArraySampleComponent } from './form-array-sample/form-array-sample.component';
import { PiechartComponent } from './piechart/piechart.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { TableComponent } from './table/table.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
{path:'form',component:Demo1Component},
{path:'charts',component:ChartsComponent},
{path:'chart1',component:BarchatComponent},
{path:'chart2',component:PiechartComponent},
{path:'table',component:TableComponent},
{path:'templates',component:TemplatesComponent},
{path:'formArray',component:FormArraySampleComponent},
{path:'addEmployee',component:AddEmployeeComponent},
{path:'rxjs',component:RxjsDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
