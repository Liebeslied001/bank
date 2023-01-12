import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category, Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css'],
})
export class CreateNewCategoryComponent {
  @Input() transactions: Transaction[] = [];
  @Input() categories: Category[] = [];
  @Output() onOpenModal: EventEmitter<boolean> = new EventEmitter();
  openModal() {
    this.onOpenModal.emit(true);
  }
}
