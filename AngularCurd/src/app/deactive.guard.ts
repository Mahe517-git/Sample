import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Demo1Component } from './demo1/demo1.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<Demo1Component> {
  canDeactivate(
    component: Demo1Component,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.form1.invalid){

      return  window.confirm("Form data is not saved")
              
    }
    
      return true;
  }
  
}
