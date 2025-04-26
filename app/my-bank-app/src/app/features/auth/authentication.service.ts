import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Credentials } from '../../models/Credentials';
import { User } from '../../models/User';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { AuthResponse } from '../../models/AuthResponse';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authClient = inject(HttpClient)

  readonly baseUrl = environment.authUrl;

  constructor() { }

  login(credentials:Credentials):Observable<AuthResponse>{
    return this.authClient.post<AuthResponse>(this.baseUrl+"/login",credentials)
        .pipe(
          retry(2),
          catchError(err=>{
          console.error('Invalid username or password')
          return throwError(()=>new Error('Invalid username or password'))
        }))
  }


  signup(user:User){
    return this.authClient.post(this.baseUrl,user)
  }

  storeToken(token:string){
    sessionStorage.setItem("bankapp.jwt",token)
  }

  fetchToken(){
    return sessionStorage.getItem('bankapp.jwt')
  }


  deleteToken(){
    sessionStorage.removeItem('bankapp.jwt')
  }




}
