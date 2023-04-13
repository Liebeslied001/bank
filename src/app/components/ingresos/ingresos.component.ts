import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css'],
})
export class IngresosComponent {
  @Input() color!: string;
  @Input() icon!: string;
  @Input() name!: string;
  @Input() cantidad!: string | number;
  @Input() colorCant!: string;
}
