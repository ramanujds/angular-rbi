import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
    private fb= inject(FormBuilder)
    private loginService= inject(AuthenticationService)
    private router=inject(Router)

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  error = '';

  submit() {
    if (this.form.invalid) return;

    const { username, password } = this.form.value;

    this.loginService.login(username!, password!).subscribe({
      next: (res) => {
        this.loginService.storeToken(res.token);
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.error = 'Login failed. Please check your credentials.';
      }
    });
  }


}
