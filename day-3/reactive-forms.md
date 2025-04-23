## What Are Reactive Forms?

- Defined **entirely in the TypeScript code**
- Highly **predictable**, **testable**, and **scalable**
- Ideal for **complex forms**, **dynamic validation**, and **conditional logic**
- Uses `FormGroup`, `FormControl`, and `FormBuilder`

---

## Setup

Make sure to import `ReactiveFormsModule`.

If using **standalone component**:

```ts
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  imports: [ReactiveFormsModule],
})
```

---

## ✅ Basic Example: Login Form with Validation

### `login-form.component.ts`

```ts
export class LoginFormComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Data:', this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched(); // show all errors
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
```

---

### `login-form.component.html`

```html
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">

  <!-- Email -->
  <div>
    <label>Email</label>
    <input type="email" formControlName="email" />
    <div *ngIf="email?.invalid && email?.touched">
      <div *ngIf="email?.errors?.['required']">Email is required.</div>
      <div *ngIf="email?.errors?.['email']">Invalid email format.</div>
    </div>
  </div>

  <!-- Password -->
  <div>
    <label>Password</label>
    <input type="password" formControlName="password" />
    <div *ngIf="password?.invalid && password?.touched">
      <div *ngIf="password?.errors?.['required']">Password is required.</div>
      <div *ngIf="password?.errors?.['minlength']">
        Minimum 6 characters required.
      </div>
    </div>
  </div>

  <button type="submit" [disabled]="loginForm.invalid">Login</button>
</form>
```

