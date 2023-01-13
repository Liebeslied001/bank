import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category, Transaction } from 'src/app/models/transaction.model';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.css'],
})
export class ModalCategoryComponent {
  @Input() isOpen: boolean = false;
  @Input() categories: Category[] = [];
  @Output() onCloseModal = new EventEmitter<boolean>();
  @Output() omTransaction = new EventEmitter<Transaction>();
  transaction: Transaction = {
    id: '',
    date: new Date(),
    amount: 0,
    category_id: '',
  };
  colors: string[] = [
    '#EF4444',
    '#F97316',
    '#F59E0B',
    '#10B981',
    '#14B8A6',
    '#06B6D4',
    '#0EA5E9',
    '#3B82F6',
  ];
  icons: string[] = [
    'fa-solid fa-building-columns',
    'fa-solid fa-cart-shopping',
    'fa-solid fa-heart',
    'fa-solid fa-gamepad',
    'fa-solid fa-book',
    'fa-solid fa-graduation-cap',
    'fa-solid fa-car',
    'fa-solid fa-gift',
  ];
  addTransaction(): void {
    this.transaction.id = uuid();
    this.transaction.date = new Date();
    this.omTransaction.emit(this.transaction);
    console.log(this.transaction);
  }
  addCategoria(clase: string): void {
    const category = this.categories.find((cat) => cat.icon == clase);
    this.transaction.category_id = category?.id || '';
  }
  stringOpen: string = 'modal';
  ngOnChanges() {
    if (this.isOpen) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }
  openModal() {
    this.isOpen = true;
    this.stringOpen = 'modal is-open';
  }
  closeModal() {
    this.onCloseModal.emit(false);
    this.stringOpen = 'modal';
  }
  handleModalContainerClick(event: Event) {
    event.stopPropagation();
  }
}
