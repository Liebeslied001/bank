import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/service/categories.service';
@Component({
  selector: 'app-add-new-categories',
  templateUrl: './add-new-categories.component.html',
  styleUrls: ['./add-new-categories.component.css'],
})
export class AddNewCategoriesComponent {
  @Input() display: boolean = false;
  @Output() clickClose: EventEmitter<any> = new EventEmitter();

  get categories(): CategoryModel[] {
    //filtrar repetidos
    const reduceCategory = this.categoryService.listCategory.reduce(
      (acc: any, act: CategoryModel) => {
        if (acc.findIndex((accc: any) => accc.color === act.color) > -1) {
          return acc;
        }
        console.log(acc);
        acc.push(act);
        return acc;
      },
      []
    );
    return reduceCategory;
  }
  newCategory: CategoryModel = {
    name: '',
    color: 'red',
    icon: 'groceries',
    transaction_type: 'expense',
  };

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {}

  handleClickClose = ($event: any) => {
    if ($event?.target?.dataset.id === 'modal') {
      this.clickClose.emit();
    }
  };

  handleClickColor = ($event: any) => {
    const currentColor = $event.target.dataset.color;
    console.log($event.target.dataset);

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
      this.categoryService.createCategory(this.newCategory);
      console.log(this.newCategory);
      this.clickClose.emit();
    }
  };
}
