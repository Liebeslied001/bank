import { Component, Input } from '@angular/core';
import { Category, NewTransac, Transaction } from 'src/app/models/transaction.model';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent {
  @Input() transactions: Transaction[] = [];
  @Input() categories: Category[] = [];
  newTransactions: NewTransac[] = [];
  color: string = '';
  icon: string = '';
  name: string = '';
  cantidad: string = '';
  colorPostivo: string = '#43C6B8';
  colorNegativo: string = '#F06C6C';
  ngOnInit() {
    const parse: Transaction[] = JSON.parse(JSON.stringify(this.transactions));

    const newTransactions = parse.sort((o1, o2) => {
      if (o1.date > o2.date) {
        return -1;
      } else if (o2.date < o1.date) {
        return 1;
      } else {
        return 0;
      }
    });
    this.newTransactions = this.forTemplate(newTransactions);
    this.forTemplate(newTransactions)
  }
  forTemplate(data1:Transaction[]) {
    interface Acc {
      total?:number ,
      arreglo: Transaction[]
    }
    const acumulacion:Acc[] = [];

    data1.forEach((dd, i) => {
      const indx = acumulacion.findIndex(
        (acc) => acc?.arreglo[0]?.date.toString() == dd.date.toString()
      );
      if (indx < 0) {
        return acumulacion.push({ arreglo: [{ ...dd, date: dd.date }] });
      } else {
        return acumulacion[indx].arreglo.push({ ...dd, date: dd.date });
      }
    });
    const datafINAL = acumulacion.map((acc) => {
      const total = acc.arreglo.reduce((acc, act) => {
        return acc + act.amount;
      }, 0);
      return { total, arreglo: [...acc.arreglo] };
    });
    return datafINAL;
  }
}
