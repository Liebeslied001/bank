import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() color!: string;
  @Input() amount!: number;
  @Input() textSalario!: string;
  @Input() icon!: string;
  @Input() categories: Category[] = [];
  cateria: Category = {
    id: '',
    color: '',
    icon: '',
    name: '',
  };
  constructor() {
    this.cargarCategoria();
  }
  cargarCategoria() {}
}
