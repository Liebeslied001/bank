import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getToken()
  }
  getToken(): boolean {
    let token = JSON.parse(localStorage.getItem('user')!) || {};
    console.log(token)
    if (Object.keys(token).length > 0) {
      this.router.navigate(['categories'])
      return false;
    } else {
      return true;
    }
  }
}
