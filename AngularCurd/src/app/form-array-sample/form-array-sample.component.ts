import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-sample',
  templateUrl: './form-array-sample.component.html',
  styleUrls: ['./form-array-sample.component.css']
})
export class FormArraySampleComponent implements OnInit {

  sampleform:FormGroup;
  documentform:FormGroup
  constructor(private fb:FormBuilder) { }
  submited:boolean=false;
  ngOnInit(): void {
    this.sampleform=this.fb.group({
      documentList:this.fb.array([])
    });
    this.addDocument();
  }

  getDocumentListArray():FormArray{
    return  this.sampleform.controls['documentList'] as FormArray  //this.sampleform.get("documentList") as FormArray// 
  }
  convertion:FormArray
  getControl(i:any){
    //this.convertion=<FormArray>this.sampleform.get('documentList')
    console.log(this.sampleform.get('documentList'))
   return  (<FormArray>this.sampleform.get('documentList')).controls[i]
  }

  addDocument(){
  this.documentform=this.fb.group({
      documentName:['',Validators.required],
      documentType:['',Validators.required],
      path:['',Validators.required]
  });
  this.getDocumentListArray().push(this.documentform);
   //console.log(this.sampleform)
  }

  addForm1:any
  addBtn(i:number){
    this.submited=true
  this.addForm1= this.getControl(i);
  if(this.addForm1.valid){
    this.documentform=this.fb.group({
        documentName:['',Validators.required],
        documentType:['',Validators.required],
        path:['',Validators.required]
    });
    this.getDocumentListArray().push(this.documentform);
    this.submited=false;
    }
    }


  delete(i:number){
    this.getDocumentListArray().removeAt(i)
  }

  // getArrayControl(i:number){
  //   return (<FormArray>this.sampleform.get('documentList')).controls[i]
  // }

}
