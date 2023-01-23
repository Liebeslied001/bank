import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ICONS, COLORS } from 'src/app/utils/constants';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  public listCategory: any = []
  public listTransaction: any = []

  constructor(
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe((res: any) => {
      this.listCategory = this.hydratorData(res)
      this.listTransaction = this.hydrateTransactionsData(res)
    })
  }


  hydratorData = (res: any) => res.map((category: any) => {
    const totalTransactions = category.transactions.reduce((accumulator:number, cost: any) => category.transaction_type === 'income' ? accumulator + cost.amount : accumulator - cost.amount, 0)
    return ({
      name: category.name,
      alias: category.name.toLowerCase(),
      icon: ICONS[category?.icon],
      color: COLORS[category?.color],
      total: totalTransactions
    })
  })

  hydrateTransactionsData = (res: any) => {
    let totalTransactions: any = []
    res.forEach((category: any) => {
      category.transactions.forEach((transaction: any) => {
        let updateTransaction = {
          date: transaction.date,
          id: transaction.id,
          category: category.name,
          description: transaction.notes,
          icon: ICONS[category?.icon],
          color: COLORS[category?.color],
          mount: transaction.amount,
          alias: category.name.toLowerCase()

        }
        if (category.transaction_type === 'expense') {
          updateTransaction.mount = -transaction.amount
        }
        totalTransactions.push(updateTransaction)
      })
    })
    return totalTransactions
  }
}
