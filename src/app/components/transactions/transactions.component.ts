import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent {

  @Input() listTransaction: any = []
  @Input() listCategory: any = []

  @Input() transaction: Transaction = {
    id: 0,
    icon: '',
    category: '',
    amount: 0,
  }

  private colors: any = {
    red: '#f44261',
    orange: '#f97216',
    yellow: '#f59e0b',
    green: '#10b981',
    'green-aqua': '#10b981',
    turqoise: '#06b6d4',
    'blue-light': '#0ea5e9',
    blue: '#3b82f6',
    gray: '#6b7380',
    purple: '#8b5cf6'
  }

  private icons: any = {
    building: 'fa-solid fa-building-columns',
    shopping: 'fa-solid fa-cart-shopping',
    car: 'fa-solid fa-car',
    health: 'fa-solid fa-laptop-medical',
    gift: 'fa-solid fa-gift',
    education: 'fa-solid fa-chalkboard'
  }
  color: string = '';
  icon: string = '';
  name: string = '';
  cantidad: string = '';
  colorPostivo: string = '#43C6B8';
  colorNegativo: string = '#F06C6C';

  isFilters: boolean = false

  filterApplieds: any = {
    category: [],
    amount: {},
    date: {}
  }
  formattedTransactions: any = []
  listTransactionInit: any = []

  constructor() {

  }

  ngOnChanges (changes: any) {
    this.formattedTransactions = [...this.formatTransaction(changes['listTransaction'].currentValue)]
    this.listTransactionInit = [...changes['listTransaction'].currentValue]
    console.log(this.listTransaction)
  }

  formatTransaction = (listTransaction: any) => {
    let result: any[] = []
    let dates: any[] = []
    if (listTransaction && listTransaction.length > 0) {
      listTransaction.forEach((transaction: any) => {
        const indexInResult = result.findIndex((item: any) => item.date === transaction.date)
        const isExist = indexInResult >= 0

        if (isExist) {
          result[indexInResult].moves.push({
            ...transaction
          })
          result[indexInResult].total += transaction.mount
        } else {
          let itemResult = {
            date: transaction.date,
            total: transaction.mount,
            moves: [{
              ...transaction
            }]
          }
          result.push(itemResult)
        }
      })
    }

    return result.sort((a, b) => b.date.localeCompare(a.date))
  }

  handleClickIconFilter = () => {
    if (this.isFilters) {
      this.isFilters = false
    } else {
      this.isFilters = true
    }
  }

  setCategoryFilter = (element: any) => {
    if (element.checked) {
      this.filterApplieds = {
        ...this.filterApplieds,
        category: [...this.filterApplieds.category, element.value]
      }
    } else {
      this.filterApplieds = {
        ...this.filterApplieds,
        category: this.filterApplieds.category.filter((item: string) => item !== element.value )
      }
    }
  }

  setAmountFilter = (element: any) => {
    if (element.name === 'min') {
      if (element.value) {
        this.filterApplieds = {
          ...this.filterApplieds,
          amount: {
            ...this.filterApplieds.amount,
            min: Number(element.value)
          }
        }
      } else {
        const filterAmount = {...this.filterApplieds.amount}
        delete filterAmount.min
        this.filterApplieds = {
          ...this.filterApplieds,
          amount: filterAmount
        }
      }
    }
    if (element.name === 'max') {
      if (element.value) {
        this.filterApplieds = {
          ...this.filterApplieds,
          amount: {
            ...this.filterApplieds.amount,
            max: Number(element.value)
          }
        }
      } else {
        const filterAmount = {...this.filterApplieds.amount}
        delete filterAmount.max
        this.filterApplieds = {
          ...this.filterApplieds,
          amount: filterAmount
        }
      }
    }
  }

  formatDate = (date: string) => {
    const [year, month, day] = date.split('-')

    return [day, month, year].join('/')

  }

  setDateFilter = (element: any) => {
    if (element.name === 'from') {
      if (element.value) {
        this.filterApplieds = {
          ...this.filterApplieds,
          date: {
            ...this.filterApplieds.date,
            from: this.formatDate(element.value)
          }
        }
      } else {
        const filterDate = {...this.filterApplieds.date}
        delete filterDate.from
        this.filterApplieds = {
          ...this.filterApplieds,
          date: filterDate
        }
      }
    }
    if (element.name === 'to') {
      if (element.value) {
        this.filterApplieds = {
          ...this.filterApplieds,
          date: {
            ...this.filterApplieds.date,
            to: this.formatDate(element.value)
          }
        }
      } else {
        const filterDate = {...this.filterApplieds.date}
        delete filterDate.to
        this.filterApplieds = {
          ...this.filterApplieds,
          date: filterDate
        }
      }
    }
  }

  formatDateFilter = (date: string) => {
    return date.split("/").reverse().join("-")
  }

  handleChangeInput = ($event: any) => {
    const element = $event.target
    console.log(element)
    let filtered: any = []

    if (element.dataset.filter === 'category') {
      this.setCategoryFilter(element)
    }
    if (element.dataset.filter === 'amount') {
      this.setAmountFilter(element)
    }

    if (element.dataset.filter === 'date') {
      this.setDateFilter(element)
    }
    filtered = this.listTransactionInit.filter((item: any) => {
      let currentTransaction = item

      if (this.filterApplieds.category.length > 0) {
        currentTransaction = currentTransaction && this.filterApplieds.category.includes(item.alias)
      }

      if (this.filterApplieds.amount.hasOwnProperty('min') && !this.filterApplieds.amount.hasOwnProperty('max')) {
        currentTransaction = currentTransaction && item.mount >= this.filterApplieds.amount.min
      }
      if (this.filterApplieds.amount.hasOwnProperty('max') && !this.filterApplieds.amount.hasOwnProperty('min')) {
        currentTransaction = currentTransaction && item.mount <= this.filterApplieds.amount.max
      }
      if (this.filterApplieds.amount.hasOwnProperty('min') && this.filterApplieds.amount.hasOwnProperty('max')) {
        currentTransaction = currentTransaction && item.mount >= this.filterApplieds.amount.min && item.mount <= this.filterApplieds.amount.max
      }
      if (this.filterApplieds.date.from && !this.filterApplieds.date.to) {
        currentTransaction = currentTransaction && item.date >= this.formatDateFilter(this.filterApplieds.date.from)
      }
      if (this.filterApplieds.date.to && !this.filterApplieds.date.from) {
        currentTransaction = currentTransaction && item.date <= this.formatDateFilter(this.filterApplieds.date.to)
      }
      if (this.filterApplieds.date.from && this.filterApplieds.date.to) {
        currentTransaction = currentTransaction && item.date >= this.formatDateFilter(this.filterApplieds.date.from) && item.date <= this.formatDateFilter(this.filterApplieds.date.to)
      }

      return currentTransaction
    })

    this.formattedTransactions = [...this.formatTransaction(filtered)]
  }

}
