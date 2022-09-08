import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
 parentArray :any[]=[]
 tableData={
    "items":
        {
            "item":
                [
                    {
                         
                        "id": "0001",
                        "type": "donut",
                        "name": "Cake",
                        "ppu": 0.55,
                        "batters":
                            {
                                "batter":
                                    [
                                        { "id": "1001", "type": "Regular" },
                                        { "id": "1002", "type": "Chocolate" },
                                        { "id": "1003", "type": "Blueberry" },
                                        { "id": "1004", "type": "Devil's Food" }
                                    ]
                            },
                        "topping":
                            [
                                { "id": "5001", "type": "None" },
                                { "id": "5002", "type": "Glazed" },
                                { "id": "5005", "type": "Sugar" },
                                { "id": "5007", "type": "Powdered Sugar" },
                                { "id": "5006", "type": "Chocolate with Sprinkles" },
                                { "id": "5003", "type": "Chocolate" },
                                { "id": "5004", "type": "Maple" }
                            ]
                    },

                ],
        }
}
  constructor() { }
  ngOnInit(): void {
    this.generateTable();
  }
  generateTable(){
  // var obj
  //   for(var i=0;i<this.tableData.items.item.length;i++){
  //     obj = {id:this.tableData.items.item[i].id,type:this.tableData.items.item[i].type}
  //       this.parentArray.push(obj)
  //       if(this.tableData.items.item[i]['batters']){
  //        for(var j=0;j<this.tableData.items.item[i]['batters'].batter.length;j++){
  //         obj = {id:this.tableData.items.item[i]['batters'].batter[j].id,type:this.tableData.items.item[i]['batters'].batter[j].type}
  //         this.parentArray.push(obj)
  //        }
  //       }
  //       if(this.tableData.items.item[i]['topping']){
  //         for(var k=0;k<this.tableData.items.item[i]['topping'].length;k++){
  //           obj = {id:this.tableData.items.item[i]['topping'][k].id,type:this.tableData.items.item[i]['topping'][k].type}
  //           this.parentArray.push(obj)
  //          }
  //       }
  //       console.log(this.parentArray)
  //   }
         const newarray=this.tableData.items.item.flat(Infinity)
    console.log(newarray);


  }
  ascending:boolean=true;
  sort(key:string){
     this.ascending=!this.ascending;
     if(this.ascending){
      this.parentArray.sort((a,b)=> a[key].toLowerCase()>b[key].toLowerCase()?1:-1)
     }else{
      this.parentArray.sort((a,b)=> a[key].toLowerCase()<b[key].toLowerCase()?1:-1)
     }
  }

}
