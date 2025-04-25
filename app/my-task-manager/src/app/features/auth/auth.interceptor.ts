import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from './authentication.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.includes('/login') || req.url.includes('/register')) {
    return next(req);
  }
  
  const loginService = inject(AuthenticationService);
  const token = loginService.getToken();

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);

};
