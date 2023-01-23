import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user: any = localStorage.getItem('user') || ''

    let request = req;
    //Validamos si el token existe
    if (user) {
      const userObject = JSON.parse(user)
      const token: string = userObject.token ||  ''
      console.log(userObject, 'local sorage')
      //Clonamos el token y lo mandamos en la cabecera de todas las peticiones HTTP
      request = req.clone({
        headers: req.headers.set(
          'Authorization', `Token token=${token}`
        )

      });
    }
    return next.handle(request);
  }
}
