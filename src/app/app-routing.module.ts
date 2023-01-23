import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { RedirectLoginGuard } from './guards/redirect-login.guard';
import { BudgetsComponent } from './pages/budgets/budgets.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesModule } from './pages/pages.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TransactionComponent } from './pages/transaction/transaction.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [RedirectLoginGuard]
  },
  {
    path: 'transaction',
    component: TransactionComponent,
    canActivate: [RedirectLoginGuard]
  },
  {
    path: 'budgets',
    component: BudgetsComponent,
    canActivate: [RedirectLoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: 'signup',
    component: SignUpComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
