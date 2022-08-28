import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  saveData(payload:any){
   return  this.http.post('http://localhost:3000/demo1',payload)
  }

  getData(){
    return this.http.get<any[]>('http://localhost:3000/emp')
  }

  saveEmployee(payload:any){
   return this.http.post('http://localhost:3000/newEmployee',payload)
  }

  getEmployee(){
    return this.http.get<any[]>('http://localhost:3000/newEmployee')
  }


}
