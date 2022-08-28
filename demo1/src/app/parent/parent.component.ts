import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  searchText:string='';
  data:any[]=[]
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
     this.service.getData().subscribe(res=>{
      console.log(this.data=res)
     })
  }

  search(){
    if(this.searchText!=""){
      this.data=this.data.filter(ele=>{ return ele.name.toUpperCase().match(this.searchText.toUpperCase())}) 
    }else{
      this.loadData();
    } 
  }

  assending:boolean=true
  sort(key:string){
    this.assending=!this.assending;
    if(this.assending){
      this.data.sort((a,b,)=>a[key]>b[key]?1:-1)
    }else{
      this.data.sort((a,b)=>a[key]<b[key]?1:-1)
    }
  }
}
