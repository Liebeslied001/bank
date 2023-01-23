import { Injectable } from '@angular/core';
import {
  CanActivate,
  UrlTree,
  Router,

} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectLoginGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.getToken()
    //return true
  }

  getToken(): boolean {
    let token = JSON.parse(localStorage.getItem('user')!) || {};
    console.log(token)
    if (Object.keys(token).length > 0) {
      return true;
    } else {
      this.router.navigate(['login'])
      return false;
    }
  }

}
