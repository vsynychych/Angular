import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'editID'
})
export class EditIDPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    const num = args[0];
    for (let i = 0; i < num; i++) {
      value += 1;
    }
    return value;
  }
}
