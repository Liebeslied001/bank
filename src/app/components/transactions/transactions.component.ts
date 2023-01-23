import { Component, Input } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { Transaction } from 'src/app/models/transaction.model';
import { CategoriesService } from 'src/app/service/categories.service';
import { ProductsService } from 'src/app/service/product.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent {
  transactions: any[] = [];
  transactions2: any[] = [];
  transactionsRender: any[] = [];
  constructor(private categoryService: CategoriesService) {}
  ngOnInit() {
    this.categoryService.getTransactions.subscribe({
      next: (res) => {
        //filtro 1
        const data: any[] = [];
        res.forEach((categ: any) => {
          const { name, transaction_type, color, icon, transactions } = categ;
          const transac = transactions?.map((tr: Transaction) => {
            if (transaction_type !== 'income') {
              tr.amount = Number(tr.amount) * -1;
            } else {
              tr.amount = Number(tr.amount) * 1;
            }
            return {
              ...tr,
              name,
              transaction_type,
              color,
              icon,
            };
          });
          data.push(...transac);
        });
        //filtro 2 sorted el arreglo
        this.transactions = data.sort((o1, o2) => {
          if (new Date(o1.date) > new Date(o2.date)) {
            return -1;
          } else if (new Date(o2.date) < new Date(o1.date)) {
            return 1;
          } else {
            return 0;
          }
        });
        this.actualizarDom();
      },
      error: (err) => {},
    });
  }
  actualizarDom() {
    //filtro 3 añadir propiedad transacts
    let transaciones = [];
    if (this.transactions2.length < 1) {
      transaciones = [...this.transactions];
    } else {
      transaciones = [...this.transactions2];
    }
    const data3: any[] = [];
    transaciones.forEach((dd) => {
      const index = data3.findIndex((dd2) => dd2.date === dd.date);
      if (index > -1) {
        data3[index].transacs.push(dd);
        return;
      }
      return data3.push({ date: dd.date, transacs: [dd] });
    });
    this.transactionsRender = data3;
    //filtro 4 añadir propiedad total
    const data4: any[] = data3.map((transc) => {
      const total = transc.transacs.reduce((acc: any, act: any) => {
        return acc + act.amount;
      }, 0);
      return {
        ...transc,
        total,
      };
    });
    this.transactionsRender = data4;
  }
  isFilters: boolean = !true;
  handleClickIconFilter = () => {
    if (this.isFilters) {
      this.isFilters = false;
    } else {
      this.isFilters = true;
    }
  };
  /////////MIS FILTROSS/////////////////////////

  filterApplieds: any = {
    category: [],
    amount: {
      min: -4000,
      max: 4000,
    },
    date: { minD: '2021-01-01', maxD: '2021-12-30' },
  };
  handleChangeInput($event: any) {
    const categoria: string = $event.target.value;
    const isSelected: boolean = $event.target.checked;
    this.filtrarPorCategoria(categoria, isSelected);
    this.actualizarDom();
  }
  handleMonto(event: any) {
    this.filtrarPorMonto();
    this.actualizarDom();
  }
  handleFecha() {
    this.filtrarPorFecha();
    this.actualizarDom();
  }
  filtrarPorCategoria(categoria: string, isSelected: boolean) {
    if (isSelected) {
      //agregamos filtro
      this.filterApplieds.category.push(categoria);
    } else {
      //quitamos filtro
      this.filterApplieds.category = this.filterApplieds.category.filter(
        (cat: any) => cat !== categoria
      );
    }
    this.transactions2 = this.transactions.filter((cat) => {
      let reg = new RegExp(this.filterApplieds.category.join('|'), 'gmi');
      reg.lastIndex = 0;
      return reg.test(cat.name);
    });
  }
  filtrarPorMonto() {
    this.transactions2 = this.transactions.filter((cat) => {
      const min = this.filterApplieds.amount.min;
      const max = this.filterApplieds.amount.max;
      return cat.amount > min && cat.amount < max;
    });
  }
  filtrarPorFecha() {
    this.transactions2 = this.transactions2.filter((cat) => {
      const minD = new Date(this.filterApplieds.date.minD);
      const maxD = new Date(this.filterApplieds.date.maxD);
      return new Date(cat.date) > minD && new Date(cat.date) < maxD;
    });
  }
}
