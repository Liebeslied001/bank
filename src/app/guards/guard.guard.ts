import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.getToken()) {
      return true;
    }
    alert('nop');
    return false;
  }

  getToken(): boolean {
    let token = JSON.parse(localStorage.getItem('user')!) || {
      email: '',
      password: '',
    };

    if (token.email === 'test1@mail.com') {
      return true;
    } else {
      return false;
    }
  }
}
