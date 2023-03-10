import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CategoriesModule } from './categories/categories.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { CreateNewCategoryComponent } from './components/create-new-category/create-new-category.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { BudgetComponent } from './components/budget/budget.component';

import { DayPipe } from './components/cuentas/day.pipe';
import { MonthPipe } from './components/cuentas/month.pipe';
import { PipesPipe } from './components/cuentas/pipes.pipe';
import { PipesUtilsPipe } from './pipes-utils.pipe';

import { ProductsService } from './service/product.service';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';
import { BudgetPageComponent } from './pages/budget-page/budget-page.component';
import { AuthInterceptorService } from './auth-interceptor.service';

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
    BudgetComponent,
    MainComponent,
    LoginComponent,
    SingUpComponent,
    NotFoundComponent,
    TransactionPageComponent,
    BudgetPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CategoriesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
