import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { CreateNewCategoryComponent } from './components/create-new-category/create-new-category.component';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    CreateNewCategoryComponent,
    SideBarComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
