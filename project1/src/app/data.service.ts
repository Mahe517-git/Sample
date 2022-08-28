import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient) { }
  getEmployeeList(){
    const headers1=new HttpHeaders()
      headers1.append('Content-Type','application/json');
      headers1.append('name','Mahesh')
   return this.http.get<any[]>('assets/data.json',{headers:headers1})
  }

  saveEmployee(payload:any){
    return this.http.post('http://localhost:3000/empList',payload)
  }
}
