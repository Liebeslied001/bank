import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
@Component({
  selector: 'app-add-new-categories',
  templateUrl: './add-new-categories.component.html',
  styleUrls: ['./add-new-categories.component.css'],
})
export class AddNewCategoriesComponent {
  @Input() display: boolean = false;
  @Output() clickClose: EventEmitter<any> = new EventEmitter();
  @Output() clickSend: EventEmitter<any> = new EventEmitter();

  public colors: Array<any> = [
    {
      name: 'red',
      className: 'circle-color circle-red red',
    },
    {
      name: 'orange',
      className: 'circle-color circle-dark-orange orange',
    },
    {
      name: 'yellow',
      className: 'circle-color circle-orange',
    },
    {
      name: 'green',
      className: 'circle-color circle-dark-green',
    },
    {
      name: 'green-aqua',
      className: 'circle-color circle-green',
    },
    {
      name: 'turqoise',
      className: 'circle-color circle-sky-blue',
    },
    {
      name: 'blue-light',
      className: 'circle-color circle-dark-sky-blue',
    },
    {
      name: 'blue',
      className: 'circle-color circle-blue',
    },
  ];

  /*private colors: any = {
    red: '#f44261',
    orange: '#f97216',
    yellow: '#f59e0b',
    green: '#10b981',
    'green-aqua': '#10b981',
    turqoise: '#06b6d4',
    'blue-light': '#0ea5e9',
    blue: '#3b82f6',
  }*/

  newCategory: CategoryModel = {
    name: '',
    color: 'red',
    icon: 'groceries',
  };

  constructor() {}

  ngOnInit(): void {}

  handleClickClose = ($event: any) => {
    if ($event?.target?.dataset.id === 'modal') {
      this.clickClose.emit();
    }
  };

  handleClickColor = ($event: any) => {
    const element = $event.target;
    const currentColor = element.dataset.color;
    console.log(element.classList);
    if (currentColor) {
      this.setCategory('color', currentColor);
    }
  };

  setCategory = (property: string, propertyValue: string) => {
    this.newCategory = {
      ...this.newCategory,
      [property]: propertyValue,
    };
  };

  handleClickIcon = ($event: any) => {
    const currentIcon = $event.target.dataset.icon;
    if (currentIcon) {
      this.setCategory('icon', currentIcon);
    }
  };

  handleChange = ($event: any) => {
    const currentValue = $event.target.value;
    this.setCategory('name', currentValue);
  };

  handleClickCreate = () => {
    if (
      this.newCategory.color !== '' &&
      this.newCategory.name !== '' &&
      this.newCategory.icon !== ''
    ) {
      this.clickSend.emit(this.newCategory);
      this.clickClose.emit();
    }
  };
}
