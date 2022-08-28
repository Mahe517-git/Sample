import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit,OnDestroy {

  items:string[]=[]
  constructor() { }
  

  ngOnInit(): void {
    for(var i=0;i<100;i++)
    {
      this.items.push('item '+i)
    }
  }


  
  ngOnDestroy(): void {
    //console.log('closed');
    this.items.length=0;
  }


}
