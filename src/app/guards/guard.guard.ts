import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.getToken()
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
