import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel, Transaction } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}
  private _listCategory: CategoryModel[] = [];

  get listCategory(): CategoryModel[] {
    return [...this._listCategory];
  }
  getAll() {
    this.http
      .get<CategoryModel[]>('https://expensable-api.herokuapp.com/categories')
      .subscribe({
        next: (res) => {
          this._listCategory = res;
        },
        error: (err) => {
          alert('token expirado');
          localStorage.removeItem('user');
        },
      });
  }
  createCategory(data: CategoryModel) {
    this.http
      .post<CategoryModel>(
        'https://expensable-api.herokuapp.com/categories',
        data
      )
      .subscribe({
        next: (categories: CategoryModel) => {
          this._listCategory = [...this._listCategory, categories];
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  get getTransactions() {
    return this.http.get<CategoryModel[]>(
      'https://expensable-api.herokuapp.com/categories'
    );
  }
}
