import { Component } from '@angular/core';
import { TabModelItem } from 'src/app/models/tab.model';

@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css'],
})
export class CreateNewCategoryComponent {
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
    purple: '#8b5cf6',
  };

  private icons: any = {
    building: 'fa-solid fa-building-columns',
    shopping: 'fa-solid fa-cart-shopping',
    car: 'fa-solid fa-car',
    health: 'fa-solid fa-laptop-medical',
    gift: 'fa-solid fa-gift',
    education: 'fa-solid fa-chalkboard',
    gamepad: 'fa-solid fa-gamepad',
    creddit: 'fa-solid fa-credit-card',
  };
  public tabActive: string = 'expenses';
  public isOpenModal: boolean = false;
  public tabs: TabModelItem[] = [
    {
      name: 'Expenses',
      alias: 'expenses',
      icon: '−',
    },
    {
      name: 'Income',
      alias: 'income',
      icon: '+',
    },
  ];

  public categories = [
    {
      icon: this.icons.building,
      text: 'Rent',
      total: 500,
      color: this.colors.gray,
      alias: 'rent',
    },
    {
      icon: this.icons.shopping,
      text: 'Groceries',
      total: 100,
      color: this.colors.turqoise,
      alias: 'grocery',
    },
    {
      icon: this.icons.car,
      text: 'Transport',
      total: 150,
      color: this.colors.orange,
      alias: 'transport',
    },
    {
      icon: this.icons.health,
      text: 'Health',
      total: 200,
      color: this.colors.red,
      alias: 'health',
    },
    {
      icon: this.icons.gift,
      text: 'Gifts',
      total: 50,
      color: this.colors.purple,
      alias: 'gift',
    },
    {
      icon: this.icons.education,
      text: 'Education',
      total: 250,
      color: this.colors['blue-light'],
      alias: 'education',
    },
    //
    {
      icon: this.icons.gamepad,
      text: 'Gamepad',
      total: 400,
      color: this.colors.purple,
      alias: 'game',
    },
    {
      icon: this.icons.creddit,
      text: 'creddit',
      total: 2000,
      color: this.colors['blue-light'],
      alias: 'creddit',
    },
  ];

  color: string = '#0CB7D5';
  money: number = 0;
  textSalario: string = '';
  icon: string = '';

  handleClickTab = ($event: any, tabAlias: string) => {
    console.log(tabAlias);
    this.tabActive = tabAlias;
  };

  handleClickAddCategory = () => {
    console.log('click');
    this.isOpenModal = true;
  };

  handleClickOutput = ($event: any) => {
    console.log($event, 'holi');
    this.isOpenModal = false;
  };

  getNewCategory = (category: any) => {
    console.log(category, 'category v');

    this.isOpenModal = false;
    this.categories = [
      ...this.categories,
      {
        icon: this.icons[category.icon],
        text: category.name,
        total: 0,
        color: this.colors[category.color],
        alias: category.name,
      },
    ];
  };
}
