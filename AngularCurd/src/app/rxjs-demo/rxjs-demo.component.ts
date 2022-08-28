import { Component, OnInit } from '@angular/core';
import { interval, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {
  observable=new Observable<any>();
  subject=new Subject<any>();
  replaySubject=new ReplaySubject<any>();
  inter:any;
  subjectText:any;
  constructor() { }

  ngOnInit(): void {

  }

  btnSubcribe(){
    this.observable = new Observable((observer)=>
    {
      observer.next('Hai');
      observer.error('error');
      setTimeout(() => {
        observer.complete();
      }, 3000);
      
    });
      this.observable.subscribe((res)=>{
        console.log(res);
      },(error)=>{

      });   
  }

  btnSubject(){
    this.subject.next(this.subjectText);
    this.subject.subscribe(res=>{
      console.log(res);
    });
  }
  
  btnReplaySubject(){
    this.replaySubject.next(this.subjectText);
    this.replaySubject.subscribe(res=>{
      console.log(res);
    });
  }


}
