import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './components/budget/budget.component';
import { CreateNewCategoryComponent } from './components/create-new-category/create-new-category.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { GuardGuard } from './guards/guard.guard';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'singup', component: SingUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent, canActivate: [GuardGuard] },
  {
    path: 'category',
    component: CreateNewCategoryComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'transaction',
    component: TransactionsComponent,
    canActivate: [GuardGuard],
  },
  { path: 'budget', component: BudgetComponent, canActivate: [GuardGuard] },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
