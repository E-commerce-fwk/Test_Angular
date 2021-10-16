import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value : String, ...args : unknown[]): unknown {

    let parts = value.split('@');
    console.log(parts);
    let res = parts[0].substr(0,3)+'*****************************@'+parts[1];
    return res;



  }

}
