import { Component, Input } from '@angular/core';
import { TabModelItem } from 'src/app/models/tab.model';
import { CategoryService } from 'src/app/services/category.service';
import { ICONS, COLORS } from 'src/app/utils/constants';
@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css'],
})
export class CreateNewCategoryComponent {
  @Input() listCategory: any = []

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

  currentDate= new Date()

  private icons: any = {
    shopping: 'cart',
    gamepad: 'game',
    creddit: 'bill',
    building: 'bank'
  }

  private colors: any = {
    'green-aqua': 'green',
    'turqoise': 'cyan',
    'blue-light': 'light-blue',
  }

  constructor(
    private categoryService: CategoryService
  ) {
  }

  handleClickTab = ($event: any, tabAlias: string) => {
    console.log(tabAlias);
    this.tabActive = tabAlias;
  };

  handleClickAddCategory = () => {
    this.isOpenModal = true;
  };

  handleClickOutput = ($event: any) => {
    console.log($event, 'holi');
    this.isOpenModal = false;
  };

  createCategory = (category: any) => {
    this.isOpenModal = false;
    let categoryUpdate = {...category}
    if (Object.keys(this.icons).includes(category.icon)) {
      categoryUpdate.icon = this.icons[category.icon]
    }
    if (Object.keys(this.colors).includes(category.color)) {
      categoryUpdate.color = this.colors[category.color]
    }
    this.categoryService.createOneCategory({
      ...categoryUpdate,
      transaction_type: this.tabActive === 'expenses' ? 'expense' : 'income'
    }).subscribe((res: any) => {
      this.listCategory = [
        ...this.listCategory,
        {
          icon: ICONS[category.icon],
          name: category.name,
          total: 0,
          color: COLORS[category.color],
          alias: category.name,
        },
      ];
    })
  };
}
