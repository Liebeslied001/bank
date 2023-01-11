import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css'],
})
export class CuentasComponent {
  @Input() cantidad!: string;
  @Input() indice!: string;
  @Input() fecha1!: string;
  @Input() fecha2!: string;
}
