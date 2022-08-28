import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  empList:any[]=[];
  constructor(private dataService:DataService) { }
   
  ngOnInit(): void {
    this.getData();
  }

  getData(){
       this.dataService.getData().subscribe(res=>{
        this.empList=res;
        console.log(this.empList)
       })
  }

  acending:boolean=true;
  sort(key:string){
    this.acending=!this.acending;
    if(this.acending){
    this.empList.sort((a,b)=>a[key].toLowerCase()>b[key].toLowerCase()?1:-1);
    }else{
      this.empList.sort((a,b)=>a[key].toLowerCase()<b[key].toLowerCase()?1:-1);
    }
  }

}
