import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any,arg1:any,arg2:any): unknown {
    return 'Mr' + ' '+value + ' '+ arg1 + ' '+arg2;
  }

}
