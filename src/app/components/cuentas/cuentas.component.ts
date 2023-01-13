import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css'],
})
export class CuentasComponent {
  @Input() total!: number;
  @Input() indice!: string;
  @Input() diaStr!: string;
  @Input() diaNumber!: string;
  
}

