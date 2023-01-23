import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('/')[0];
  }

}
