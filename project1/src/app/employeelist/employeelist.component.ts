import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private data:DataService) { }
  searchText:string='';
  empList:any[]=[]

  ngOnInit(): void {
  this.loadEmplist()
  }
  loadEmplist(){
      this.data.getEmployeeList().subscribe(res=>{
        this.empList=res
      })
        
     }

     search(text:string){
      if(this.searchText===""){
        this.loadEmplist();
      }else{
        this.empList=this.empList.filter(ele=>ele.firstName.toLowerCase().match(this.searchText.toLowerCase()))
      }
      
     }


     key:string=''
     reverse:boolean=true;
     sort(key:string){
       this.reverse=!this.reverse
       if(this.reverse){
        this.empList.sort((a,b) => a[key] > b[key] ? 1 : -1)
       }else{
        this.empList.sort((a,b) => a[key] < b[key] ? 1 : -1)
       }
     }
  
}
