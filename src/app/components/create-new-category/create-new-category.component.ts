import { Component, Input } from '@angular/core';
import { Category, Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css'],
})
export class CreateNewCategoryComponent {
  @Input() transactions: Transaction[] = [];
  @Input() categories: Category[] = [];
  color: string = '#0CB7D5';
  money: number = 0;
  nombre: string = '';
  icon: string = '';
}
