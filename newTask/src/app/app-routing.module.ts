import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnMapingComponent } from './column-maping/column-maping.component';
import { Task1Component } from './task1/task1.component';

const routes: Routes = [
{path:'task1',component:Task1Component},
{path:'maping',component:ColumnMapingComponent},
{path:'',component:Task1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
