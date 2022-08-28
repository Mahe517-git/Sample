import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  formAddEmployee:FormGroup;
  submited:boolean=false;
  constructor(private fb:FormBuilder,private dataService:DataService) { }

  ngOnInit(): void {
    this.formAddEmployee=this.fb.group({
      fName:['',Validators.required],
      mName:['',Validators.required],
      lName:['',Validators.required],
      gender:['',Validators.required],
      dob:['',Validators.required],
      email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      mobile:[null,[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
    });

    console.log(this.formAddEmployee)
  }

  get f(){return this.formAddEmployee.controls;}

  addEmployee(){
    this.submited=true;
    ///console.log(this.formAddEmployee)
     if(this.formAddEmployee.valid){
      this.dataService.saveEmployee(this.formAddEmployee.value).subscribe(res=>console.log(res))
     }
    
  }

  reset(){
         this.formAddEmployee.reset();
  }
  
}
