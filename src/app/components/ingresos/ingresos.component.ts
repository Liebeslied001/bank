import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css'],
})
export class IngresosComponent {
  @Input() color!: string;
  @Input() icon!: string;
  @Input() name!: string;
  @Input() cantidad!: number;
  @Input() colorCant!: string;

  @Input() categories: Category[] = [];
  @Input() category_id!: string;
  category!: Category;
  ngOnInit(){
    this.color = this.categories.find(cat=>cat.id == this.category_id)?.color || ""
    this.icon = this.categories.find(cat=>cat.id == this.category_id)?.icon || ""
    this.name = this.categories.find(cat=>cat.id == this.category_id)?.name || ""
  }
  
}
