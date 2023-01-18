import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsComponent } from './components/budgets/budgets.component';
import { CreateNewCategoryComponent } from './components/create-new-category/create-new-category.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TransactionsLayoutComponent } from './components/transactions-layout/transactions-layout.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'category'
  },
  {
    path: 'category',
    component: CreateNewCategoryComponent
  },
  {
    path: 'transaction',
    component: TransactionsLayoutComponent
  },
  {
    path: 'budget',
    component:BudgetsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
