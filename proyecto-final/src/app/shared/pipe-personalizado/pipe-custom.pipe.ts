import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCustom'
})
export class PipeCustomPipe implements PipeTransform {

  transform(value: string, value2: string): string {
    return value + ' ' + value2;
  }

}
