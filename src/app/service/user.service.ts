import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = {};
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user')!) || {};
  }
  getToken(): string {
    return this.user?.token || '';
  }
  login(email: string, password: string): void {
    // const miHeader = new HttpHeaders().set(
    //   'Authorization',
    //   'LCS9X3nHCQFRRVsZxbwo3Eya'
    // );
    const data = {
      email,
      password,
    };
    this.http
      .post('https://expensable-api.herokuapp.com/login', data)
      .subscribe((res: any) => {
        this.user = res;
        console.log(res);
        localStorage.setItem('user', JSON.stringify(this.user));
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
}
