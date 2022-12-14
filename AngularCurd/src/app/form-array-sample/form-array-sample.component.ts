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

  ngOnInit(): void {
    this.sampleform=this.fb.group({
      documentList:this.fb.array([])
    });
    this.addDocument();
  }

  getDocumentListArray():FormArray{
    return  this.sampleform.controls['documentList'] as FormArray  //this.sampleform.get("documentList") as FormArray// 
  }

  getControl(i:number){
    return  (<FormArray>this.sampleform.controls['documentList']).controls[i]//this.sampleform.controls['documentList']['controls'][i].controls as FormGroup
  }
  addDocument(){
  this.documentform=this.fb.group({
      documentName:['',Validators.required],
      documentType:['',Validators.required],
      path:['',Validators.required]
  });

  this.getDocumentListArray().push(this.documentform);
   console.log(this.sampleform)
  }

  delete(i:number){
    this.getDocumentListArray().removeAt(i)
  }

}
