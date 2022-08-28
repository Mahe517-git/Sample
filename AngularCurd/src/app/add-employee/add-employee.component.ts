import { VariableBinding } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import {validateText} from '../customValidaters';
import {domainValidation} from '../emailDomainValidation';
import {mustMatch} from '../matchPassword'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  empform:FormGroup;
  submited:boolean=false;
  empList:any[]=[];
  searchText:string="";
  constructor(private fb:FormBuilder,private dataService:DataService) { }

  ngOnInit(): void {
    this.empform=this.fb.group({
      name:['',[Validators.required,validateText]],
      lastName:[''],
      gender:['1',Validators.required],
      mobile:[null,[Validators.required,Validators.pattern('^[0-9]*$'),Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),domainValidation]],
    },{validator:mustMatch('name','lastName'),});
    this.getEmployee();
  }

  getEmployee(){
        this.dataService.getEmployee().subscribe(res=>{
          this.empList=res;
        })
  }

  get f(){
    return this.empform.controls;
  }

  save(){
    this.submited=true;
    if(this.empform.valid){
      //console.log(this.empform);
      this.dataService.saveEmployee(this.empform.value).subscribe(res=>{
             alert("Employed saved successfully")
      })
    }
   
  }

  cancel(){
    this.empform.reset();
  }
  delete(i:number){
    this.empList.splice(i,1)
    //this.getEmployee();
  }


  search(){
if(this.searchText==""){
 this.getEmployee();
}else{
  this.empList=this.empList.filter(ele=>ele.name.toLowerCase().match(this.searchText.toLowerCase()))
}
    
  }

  asending:boolean=true;
  sort(key:string){
  this.asending=!this.asending;
  if(this.asending){
    this.empList.sort((a,b)=>a[key]>b[key]?1:-1);
  }else{
    this.empList.sort((a,b)=>a[key]<b[key]?1:-1);
  }
   
  }
  fromparent:string;
  send(){
    this.fromparent="hi chaild" + new Date()
  }

  event(test:string){
    alert(test)
  }

}
