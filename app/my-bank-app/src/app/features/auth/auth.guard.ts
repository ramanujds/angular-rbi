import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthenticationService)

  if(authService.fetchToken()){
    return true;
  }

  
  return false;


};
