import { Component, OnInit } from '@angular/core';
import { from, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
 
  subject=new Subject();
 
  ArrayObservable:Observable<any>;

  array=[1,2,3,4,5,6,7,8,9,10]

  constructor() {
    this.subject.subscribe(res=> console.log(res))
   }

  ngOnInit(): void {
    //this.ArrayObservable=of(this.array)
    this.ArrayObservable=from(this.array)
    this.ArrayObservable.subscribe(res=>
      setTimeout(()=>{
        console.log(res)
      },2000))
  }

  btnSubject(){
    this.subject.next('I am subject')
  }

}
