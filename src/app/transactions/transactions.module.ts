import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTransactionsComponent } from './layout-transactions/layout-transactions.component';

@NgModule({
  declarations: [
    LayoutTransactionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LayoutTransactionsComponent
  ]
})
export class TransactionsModule { }
