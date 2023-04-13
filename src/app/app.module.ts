import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { CreateNewCategoryComponent } from './components/create-new-category/create-new-category.component';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { CategoriesModule } from './categories/categories.module';
import { PipesUtilsPipe } from './pipes-utils.pipe';
import { PipesPipe } from './components/cuentas/pipes.pipe';
import { DayPipe } from './components/cuentas/day.pipe';
import { MonthPipe } from './components/cuentas/month.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    CreateNewCategoryComponent,
    SideBarComponent,
    ButtonComponent,
    CuentasComponent,
    IngresosComponent,
    PipesUtilsPipe,
    PipesPipe,
    DayPipe,
    MonthPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CategoriesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
