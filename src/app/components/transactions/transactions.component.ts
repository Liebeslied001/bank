import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent {

  @Input() transaction: Transaction = {
    id: 0,
    icon: '',
    category: '',
    amount: 0,
  };

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

  private category = {
    'rent' : {
      text: 'Rent',
      color: this.colors.gray,
      icon: this.icons.building
    },
    'salary' : {
      text: 'Salary',
      color: this.colors.green,
      icon: this.icons.building
    },
    'grocery': {
      text: 'Groceries',
      color: this.colors.turqoise,
      icon: this.icons.shopping
    },
    'transport': {
      text: 'Transport',
      color: this.colors.orange,
      icon: this.icons.car,
    },
    'health': {
      text: 'Health',
      color: this.colors.red,
      icon: this.icons.health
    },
    'gift': {
      text: 'Gifts',
      color: this.colors.purple,
      icon: this.icons.gift
    },
    'education': {
      text: 'Education',
      color: this.colors['blue-light'],
      icon: this.icons.education
    }
  }

  transactionsInit: any = [
    {
      date: '07/03/2022',
      total: 1540,
      moves: [
        {
          category: this.category.rent.text,
          description: 'Description',
          icon: this.category.rent.icon,
          color: this.category.rent.color,
          mount: -500,
          alias: 'rent'
        },
        {
          category: this.category.salary.text,
          description: 'Description',
          icon: this.category.salary.icon,
          color: this.category.salary.color,
          mount: 2000,
          alias: 'salary'
        },
        {
          category: this.category.transport.text,
          description: 'Description',
          icon: this.category.transport.icon,
          color: this.category.transport.color,
          mount: -10,
          alias: 'transport'
        },
      ]
    },
    {
      date: '06/03/2022',
      total: -320,
      moves: [
        {
          category: this.category.education.text,
          description: 'Description',
          icon: this.category.education.icon,
          color: this.category.education.color,
          mount: -250,
          alias: 'education'
        },
        {
          category: this.category.grocery.text,
          description: 'Description',
          icon: this.category.grocery.icon,
          color: this.category.grocery.color,
          mount: -20,
          alias: 'grocery'
        },
        {
          category: this.category.gift.text,
          description: 'Description',
          icon: this.category.gift.icon,
          color: this.category.gift.color,
          mount: -50,
          alias: 'gift'
        },
        {
          category: this.category.health.text,
          description: 'Description',
          icon: this.category.health.icon,
          color: this.category.health.color,
          mount: 500,
          alias: 'health'
        },
      ]
    },
    {
      date: '05/03/2022',
      total: -500,
      moves: [
        {
          category: this.category.health.text,
          description: 'Description',
          icon: this.category.health.icon,
          color: this.category.health.color,
          mount: 50,
          alias: 'health'
        },
      ]
    },
  ]

  transactions = [...this.transactionsInit]
  color: string = '';
  icon: string = '';
  name: string = '';
  cantidad: string = '';
  colorPostivo: string = '#43C6B8';
  colorNegativo: string = '#F06C6C';

  isFilters: boolean = true

  filterApplieds: any = {
    category: [],
    amount: {},
    date: {}
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

  setDateFilter = (element: any) => {
    if (element.name === 'from') {
      if (element.value) {
        this.filterApplieds = {
          ...this.filterApplieds,
          date: {
            ...this.filterApplieds.date,
            from: element.value
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
            to: element.value
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

  handleChangeInput = ($event: any) => {
    const element = $event.target
    console.log($event.target.value,'valeueee')
    let filtered = []

    if (element.dataset.filter === 'category') {
      this.setCategoryFilter(element)
    }
    if (element.dataset.filter === 'amount') {
      this.setAmountFilter(element)
    }

    if (element.dataset.filter === 'date') {
      this.setDateFilter(element)
    }

    //console.log(filtered, 'filtered')
    console.log(this.filterApplieds, 'this.filterApplieds')
    //this.transactions = filtered
    filtered = this.transactionsInit.map((transaction: any) => {
      let filteredMoves = transaction.moves.filter(((move: any) => {

        let currentTransaction = transaction
        if (this.filterApplieds.category.length > 0) {
          currentTransaction = this.filterApplieds.category.includes(move.alias)
        }
        if (this.filterApplieds.amount.min && !this.filterApplieds.amount.max) {
          currentTransaction = currentTransaction && move.mount >= this.filterApplieds.amount.min
        }
        if (this.filterApplieds.amount.max && !this.filterApplieds.amount.min) {
          currentTransaction = currentTransaction && move.mount <= this.filterApplieds.amount.max
        }
        if (this.filterApplieds.amount.min && this.filterApplieds.amount.max) {
          currentTransaction = currentTransaction && move.mount >= this.filterApplieds.amount.min && move.mount <= this.filterApplieds.amount.max
        }
        return currentTransaction
        //return move.mount >= this.filterApplieds.amount.min || move.moun <= this.filterApplieds.amount.max
      }))
      return {
        ...transaction,
        moves: filteredMoves
      }
    })

    console.log(filtered,'filtered')
    this.transactions = filtered
  }

}
