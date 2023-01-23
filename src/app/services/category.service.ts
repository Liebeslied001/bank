import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getAll = () => {
    return this.http
      .get('https://expensable-api.herokuapp.com/categories')

  }

  createOneCategory = (data: any) => {
    return this.http
      .post('https://expensable-api.herokuapp.com/categories', data)

  }
}
