import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guards/guard.guard';
import { BudgetPageComponent } from './pages/budget-page/budget-page.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'singup', component: SingUpComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'categories',
    component: MainComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'transactions',
    component: TransactionPageComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'budgets',
    component: BudgetPageComponent,
    canActivate: [GuardGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
