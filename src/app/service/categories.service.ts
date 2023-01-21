import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  getAll = () => {
    return this.http
      .get('https://expensable-api.herokuapp.com/categories')

  }
}
