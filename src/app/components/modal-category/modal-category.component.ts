import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/models/transaction.model';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.css'],
})
export class ModalCategoryComponent {
  @Input() isOpen: boolean = false;
  @Output() onCloseModal: EventEmitter<boolean> = new EventEmitter();
  @Input() categories: Category[] = [];
  @Output() newCategory: EventEmitter<Category> = new EventEmitter();
  category: Category = {
    id: '',
    color: 'EF4444',
    icon: '',
    name: '',
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
  addCategpry() {
    this.category.id = uuid();
    this.newCategory.emit(this.category);
  }
  addColor(color: string) {
    this.category.color = color;
  }
  addIcon(clase: string) {
    console.log(clase);
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
    console.log(event);
  }
}
