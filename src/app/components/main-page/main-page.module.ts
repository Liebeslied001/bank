import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { CuentasComponent } from '../cuentas/cuentas.component';
import { MainPageComponent } from './main-page.component';
import { CreateNewCategoryComponent } from '../create-new-category/create-new-category.component';
import { TransactionsComponent } from '../transactions/transactions.component';
import { IngresosComponent } from '../ingresos/ingresos.component';
import { ModalCategoryComponent } from '../modal-category/modal-category.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonComponent,
    CreateNewCategoryComponent,
    SideBarComponent,
    CuentasComponent,
    TransactionsComponent,
    MainPageComponent,
    IngresosComponent,
    ModalCategoryComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
