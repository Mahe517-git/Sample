import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData(){
   return this.http.get<any[]>('http://localhost:3000/fileNameList')
  }

  getRules(){
    return this.http.get<any[]>('http://localhost:3000/ruledata')
   }

 
}
