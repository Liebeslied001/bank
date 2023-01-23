import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserRegister } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = {};
  constructor(
    private http: HttpClient,
    private router: Router
    ) {
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
    try {
      this.http
        .post('https://expensable-api.herokuapp.com/login', data)
        .subscribe((res: any) => {
          console.log(res, 'res')
          if (res.errors) {
            alert(res.errors[0])
          } else {
            this.user = res;
            localStorage.setItem('user', JSON.stringify(this.user));
            this.router.navigate(['/categories'])

          }
        });
    } catch(e) {
      console.log(e, 'e')
    }
  }
  signUp(userRegister: UserRegister): void {
    this.http
      .post('https://expensable-api.herokuapp.com/signup', userRegister)
      .subscribe((res: any) => {
        this.user = res;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['/categories'])
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
}
