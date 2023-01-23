import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewCategoryComponent } from '../components/create-new-category/create-new-category.component';
import { TransactionsComponent } from '../components/transactions/transactions.component';
import { AddNewCategoriesComponent } from './add-new-categories/add-new-categories.component';
import { ButtonComponent } from './button/button.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PipesPipe } from './cuentas/pipes.pipe';
import { DayPipe } from './cuentas/day.pipe';
import { MonthPipe } from './cuentas/month.pipe';
import {RouterModule} from '@angular/router';
import { FormatTransactionPipe } from '../pages/transaction/format-transaction.pipe';

@NgModule({
  declarations: [
    AddNewCategoriesComponent,
    ButtonComponent,
    CreateNewCategoryComponent,
    CuentasComponent,
    IngresosComponent,
    SideBarComponent,
    TransactionsComponent,
    PipesPipe,
    DayPipe,
    MonthPipe,
    FormatTransactionPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AddNewCategoriesComponent,
    ButtonComponent,
    CreateNewCategoryComponent,
    CuentasComponent,
    IngresosComponent,
    SideBarComponent,
    TransactionsComponent,
  ]
})

export class ComponentsModule { }
