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
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainPageModule } from './components/main-page/main-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MainPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
