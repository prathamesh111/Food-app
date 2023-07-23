import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import {exhaustMap, take} from 'rxjs/operators'
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user$.pipe(
      take(1),
      exhaustMap((userData) => {
        let token = userData?.token ? userData?.token : '';
        if(!userData){
          return next.handle(request);
        }
        const modifiedRequest = request.clone({ params: new HttpParams().set('auth', token), headers:request.headers.set('isAuth', "Yes") });
        return next.handle(modifiedRequest);
      }));
  }
}
