import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent {
  @Input() transactions: Transaction[] = [];
  newTransactions: object[] = [];
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
    const dato = [
      {
        total: 750,
        transaction1: {
          id: '',
          monto: '',
          categoriaid: '',
        },
        transaction2: {
          id: '',
          monto: '',
          categoriaid: '',
        },
        transaction3: {
          id: '',
          monto: '',
          categoriaid: '',
        },
      },
    ];
    this.newTransactions = newTransactions;
    console.log(newTransactions);
  }
}
