import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() category_id!: string;
  @Input() amount!: number;
  @Input() categories: Category[] = [];
  color!: string;
  textSalario!: string;
  icon!: string;
  ngOnInit() {
    const miCategoria = this.categories.find(
      (cat) => cat.id == this.category_id
    );
    this.color = miCategoria?.color || '';
    this.textSalario = miCategoria?.name || '';
    this.icon = miCategoria?.icon || '';
  }
}
