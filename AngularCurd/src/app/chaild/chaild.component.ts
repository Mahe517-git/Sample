import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chaild',
  templateUrl: './chaild.component.html',
  styleUrls: ['./chaild.component.css']
})
export class ChaildComponent implements OnInit {

  constructor() { }
  fromparent1:string
   @Input() set fromparent(value:any){
    this.fromparent1=value;
   }
    @Output() event=new EventEmitter();
  ngOnInit(): void {
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  // }

  parent(){
    this.event.emit('test')
  }

}
