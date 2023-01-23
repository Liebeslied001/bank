import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router'

import { BudgetsComponent } from './budgets/budgets.component';
import { CategoriesComponent } from './categories/categories.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../components/material/material.module';
import { UserService } from '../services/user.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryService } from '../services/category.service';
import { AuthInterceptorService } from '../interceptors/auth-interceptor.service';
import { ErrorInterceptorService } from '../interceptors/error-interceptor.service';

@NgModule({
  declarations: [
    BudgetsComponent,
    CategoriesComponent,
    TransactionComponent,
    LoginComponent,
    SignUpComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    BudgetsComponent,
    CategoriesComponent,
    TransactionComponent,
    LoginComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    UserService,
    CategoryService
  ]
})

export class PagesModule { }
