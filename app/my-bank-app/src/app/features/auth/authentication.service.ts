import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Credentials } from '../../models/Credentials';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../models/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authClient = inject(HttpClient)

  readonly baseUrl = "http://localhost:5000/api/v1/users"

  constructor() { }

  login(credentials:Credentials):Observable<AuthResponse>{
    return this.authClient.post<AuthResponse>(this.baseUrl+"/login",credentials)
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
