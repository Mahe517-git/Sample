import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  sampleForm:FormGroup;
  submited:boolean=false;
  message:string;
  empList: any[]=[];
  searchText:string;
  constructor(private fb:FormBuilder,private dataService:DataService) { }

  ngOnInit(): void {
    this.sampleForm=this.fb.group({
      name:['',Validators.required],
      gender:['1'],
      mobile:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      hobies:this.fb.array([])
    });

   this.loadData();
  }

  loadData(){
         this.dataService.getData().subscribe(res=>{
            this.empList=res;
         })
  }

  get f(){
    return this.sampleForm.controls;
  }

  save(){
    this.submited=true;
    if(this.sampleForm.valid){
    this.dataService.saveData(this.sampleForm.value).subscribe(res=>{
             setTimeout(()=>{
               this.message="Saved succesfully";
               this.loadData();

             },2000)
           })
    }
  }
  cancel(){
    this.sampleForm.reset();
  }
  name:string

  asending:boolean=true;
  sort(key:string){
  this.asending=!this.asending
  this.empList.sort((a,b)=>{
    if(this.asending){
      return a[key].toLowerCase()>b[key].toLowerCase()?1:-1
    }else{
      return a[key]<b[key]?1:-1
    }
  })
  }

  change(){
    if(this.searchText!=""){
    this.empList=this.empList.filter(ele=>ele.name.toLowerCase().match(this.searchText.toLowerCase()))
    console.log(this.searchText)
    }else{
      this.loadData();
    }
  }

}
