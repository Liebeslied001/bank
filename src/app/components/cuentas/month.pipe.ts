import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]){
    const monthValue = value.split('/')[1]
    const year = value.split('/')[2]
    let format = ''
    let month = ''
    if (monthValue == '01') {
      month = 'January'
    }
    format = `${month}, ${year}`
    return format
  }

}
