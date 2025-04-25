import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthenticationService)

  loginForm = this.fb.group(
    {
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    }
  )

  login(user:any){
    this.authService.login(user).subscribe(
      response => this.authService.storeToken(response.token)
    )
  }


}
