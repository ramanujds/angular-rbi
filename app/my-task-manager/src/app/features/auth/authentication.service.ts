import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authApiService= inject(HttpClient)

  private apiUrl = 'http://localhost:5000/api/v1/users/login';

  login(username: string, password: string) {
    return this.authApiService.post<{ token: string }>(this.apiUrl, { username, password });
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }


}
