import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTransaction'
})
export class FormatTransactionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
