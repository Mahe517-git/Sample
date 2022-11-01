import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  fileNameList=[]=[
    {id:1,
    fileName:"Insurance",
   sheet:[
    {id:1,sheetName:"Insurance sheet1",columns:{id:1,columnName:"test",Adderess:"Address Test",email:"test@gmail.com",mobile:"test"}
    },{id:1,sheetName:"Insurance sheet2",columns:{id:1,columnName:"test",Adderess:"Address Test",email:"test@gmail.com",mobile:"test"}
    },{id:1,sheetName:"Insurance sheet3",columns:{id:1,columnName:"test",Adderess:"Address Test",email:"test@gmail.com",mobile:"test"}
    },{id:1,sheetName:"Insurance sheet4",columns:{id:1,columnName:"test",Adderess:"Address Test",email:"test@gmail.com",mobile:"test"}
    },{id:1,sheetName:"Insurance sheet5",columns:{id:1,columnName:"test",Adderess:"Address Test",email:"test@gmail.com",mobile:"test"}
    }]},
    {id:2,
    fileName:"Bank Book",
    sheet:[
    {id:1,sheetName:"Bank Book sheet21",columns:{id:1,columnName2:"test2",Adderess2:"Address Test2",email2:"test@gmail.com",mobile2:"test"}
    },{id:1,sheetName:"Bank Book shee22",columns:{id:1,columnName2:"test2",Adderess2:"Address Test2",email2:"test@gmail.com",mobile2:"test"}
    },{id:1,sheetName:"Bank Book sheet23",columns:{id:1,columnName2:"test2",Adderess2:"Address Test2",emai2:"test@gmail.com",mobile2:"test"}
    },{id:1,sheetName:"Bank Book sheet24",columns:{id:1,columnName2:"test2",Adderess2:"Address Test2",emai2:"test@gmail.com",mobile2:"test"}
    },{id:1,sheetName:"Bank Booksheet25",columns:{id:1,columnName2:"test2",Adderess2:"Address Test2",email2:"test@gmail.com",mobile2:"test"}
    }]},
    {id:3,
    "fileName":"Cash Book",
    sheet:[
    {id:1,sheetName:"Cash Book sheet31",columns:{id:1,columnName3:"test3",Adderess3:"Address Test3",email3:"test@gmail.com",mobile3:"test"}
    },{id:1,sheetName:"Cash Book shee32",columns:{id:1,columnName3:"test3",Adderess3:"Address Test3",email3:"test@gmail.com",mobile3:"test"}
    },{id:1,sheetName:"Cash Book sheet33",columns:{id:1,columnName3:"test3",Adderess3:"Address Test3",email3:"test@gmail.com",mobile3:"test"}
    },{id:1,sheetName:"Cash Book sheet34",columns:{id:1,columnName3:"test3",Adderess3:"Address Test3",email3:"test@gmail.com",mobile3:"test"}
    },{id:1,sheetName:"Cash Book sheet35",columns:{id:1,columnName3:"test3",Adderess3:"Address Test3",email3:"test@gmail.com",mobile3:"test"}
    }]}
    ]

    ruledata: Array<any> = [
      {
         "ruleid":2,
         "rule":"BR1",
         "ruleDescription":"Name Should contain Alphabets Characters only",
         "valueField":"Name",
         "valueCheck":"Not Null, Alphabetic",
         "category":"customer",
         "version":"1",
         "isSelected":false
      },
      {
         "ruleid":3,
         "rule":"BR2",
         "ruleDescription":"Email Should contain @ and . special character",
         "valueField":"Email",
         "valueCheck":"@ & .",
         "category":""}
       ]  
  sheet:any[]=[];
  columns:any[]=[];
  rules:any[]=[]
  selectedfile:any;
  selectedSheet:any;
  selectedRule:any;
  

  constructor() {
       this.rules=this.ruledata.map(item=>item.rule + " " + item.ruleDescription)
  }

  ngOnInit(): void {
  }

  onSelectFileName(){
     this.sheet=[];
     this.columns=[]
     this.sheet =Array.from(this.selectedfile.sheet);
  }
  onSelectSheet(){
     this.columns=[];
     this.columns=[...Object.keys(this.selectedSheet.columns)]
  }

}


