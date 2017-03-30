import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exppipe'
})
export class ExppipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
