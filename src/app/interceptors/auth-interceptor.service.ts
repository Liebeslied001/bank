import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user: any = localStorage.getItem('user') || ''

    let request = req;
    if (user) {
      const userObject = JSON.parse(user)
      const token: string = userObject.token ||  ''
      request = req.clone({
        headers: req.headers.set(
          'Authorization', `Token token=${token}`
        )

      });
    }
    return next.handle(request);
  }
}
