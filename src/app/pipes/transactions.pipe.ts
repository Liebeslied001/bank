import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactions'
})
export class TransactionsPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let result: any[] = []
    let dates: any[] = []
    if (value && value.length > 0) {
      value.forEach((transaction: any) => {
        let formatted: any = {
          date: '',
          moves: [],
          total: 0
        }
        if (!dates.includes(transaction.date)) {
          formatted.date = transaction.date
        }
        if (formatted.date === transaction.date) {
          formatted.moves = [...formatted.moves, transaction]
        }
        if (formatted.moves.length > 0) {
          formatted.total = formatted.moves.reduce(
            (acc: number, currentValue: any) => acc + currentValue.mount,
            0
          )
        }

        result.push(formatted)
      })
    }

    return result.sort((a, b) => b.date.localeCompare(a.date))
  }

}
