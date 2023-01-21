import { Component } from '@angular/core';
import { TabModelItem } from 'src/app/models/tab.model';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css'],
})
export class CreateNewCategoryComponent {
  public listCategory: any = []
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
    teal: 'teal',
    cyan: 'cyan',
    'light-blue': '#0ea5e9',
  };

  public icons: any = {
    building: 'fa-solid fa-building-columns',
    shopping: 'fa-solid fa-cart-shopping',
    car: 'fa-solid fa-car',
    health: 'fa-solid fa-laptop-medical',
    gift: 'fa-solid fa-gift',
    education: 'fa-solid fa-chalkboard',
    gamepad: 'fa-solid fa-gamepad',
    creddit: 'fa-solid fa-credit-card',
    cart: 'fa-solid fa-cart-shopping',
    game: 'fa-solid fa-gamepad',
    bill: 'fa-solid fa-gamepad',
    bank: 'fa-solid fa-building-columns',
  }
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

  color: string = '#0CB7D5';
  money: number = 0;
  textSalario: string = '';
  icon: string = '';

  constructor(
    private categoriesService: CategoriesService
  ) {
    this.listCategory = this.categoriesService.getAll()
  }

  ngOnInit() {
    this.categoriesService.getAll().subscribe((res: any) => {
      this.listCategory = this.hydratorData(res)
    })
  }

  hydratorData = (res: any) => res.map((category: any) => {
    const totalTransactions = category.transactions.reduce((accumulator:number, cost: any) => category.transaction_type === 'income' ? accumulator + cost.amount : accumulator - cost.amount, 0)
    return ({
      name: category.name,
      icon: this.icons?.[category?.icon],
      color: this.colors?.[category?.color],
      total: totalTransactions
    })
  })

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
    this.listCategory = [
      ...this.listCategory,
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
