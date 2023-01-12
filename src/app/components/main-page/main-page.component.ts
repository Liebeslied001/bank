import { Component } from '@angular/core';
import { Category, Transaction } from 'src/app/models/transaction.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  transactions: Transaction[] = [
    { id: uuid(), date: new Date(), amount: 500, category_id: 'C_REMT' },
    { id: uuid(), date: new Date(), amount: 100, category_id: 'C_GROCERIES' },
    { id: uuid(), date: new Date(), amount: 150, category_id: 'C_TRANSPORT' },
    { id: uuid(), date: new Date(), amount: 200, category_id: 'C_HEALTH' },
    { id: uuid(), date: new Date(), amount: 50, category_id: 'C_GIFTS' },
    { id: uuid(), date: new Date(), amount: 250, category_id: 'C_EDUCATION' },
  ];
  categories: Category[] = [
    {
      id: 'C_REMT',
      name: 'Rent',
      color: '#808080',
      icon: 'fa-solid fa-building-columns',
    },
    {
      id: 'C_GROCERIES',
      name: 'Groceries',
      color: '#0CB7D5',
      icon: 'fa-solid fa-cart-shopping',
    },
    {
      id: 'C_TRANSPORT',
      name: 'Transport',
      color: '#F97315',
      icon: 'fa-solid fa-car',
    },
    {
      id: 'C_HEALTH',
      name: 'Health',
      color: '#F43F5E',
      icon: 'fa-solid fa-laptop-medical',
    },
    {
      id: 'C_GIFTS',
      name: 'Gifts',
      color: '#8B5CF6',
      icon: 'fa-solid fa-gift',
    },
    {
      id: 'C_EDUCATION',
      name: 'Education',
      color: '#0EA5E9',
      icon: 'fa-solid fa-chalkboard',
    },
  ];
  isOpenM: boolean = false;
  agregarCategpria(cat: Category) {
    this.categories.push(cat);
  }
}
