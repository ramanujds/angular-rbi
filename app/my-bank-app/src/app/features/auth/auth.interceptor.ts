import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.includes('/login') || req.url.includes('/signup')) {
    return next(req);
  }

  const authService = inject(AuthenticationService)
  const router = inject(Router)

  const jwt = authService.fetchToken();
  if(!jwt){
    console.error("No token present")
    router.navigate(['/login'])
  }

  const authRequest = req.clone(
    {
      setHeaders:{
        Authorization: `Bearer ${jwt}`
      }
    }
  )
  return next(authRequest);
};
