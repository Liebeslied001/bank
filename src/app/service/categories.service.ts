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
    this.http
      .get('https://expensable-api.herokuapp.com/categories')
      .subscribe((res: any) => {
        console.log(res)
      })
  }
}
