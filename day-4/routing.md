## Why Use Routing?

- Navigate between different views like `/login`, `/dashboard`, `/tasks`
- Load components dynamically without full page reload
- Support route guards, lazy loading, route params, etc.

---

## Core Concepts in Angular Routing

| Concept           | Description |
|------------------|-------------|
| `RouterModule`   | Provides Angular routing APIs |
| `Routes`         | An array of route definitions |
| `RouterOutlet`   | Placeholder to render matched component |
| `RouterLink`     | Directive to navigate (like anchor tag) |
| `ActivatedRoute` | Access route params or query params |
| `Router`         | Imperative navigation using `router.navigate()` |

---

## Step-by-Step Example: Setup Routing

### 1. Define Routes

Create a file `app.routes.ts` for defining routes.

```ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];
```

> These routes map paths to components

---

### 2. Setup Root Component with Router Configuration

In your `main.ts`, configure the router:

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
```

---

### 3. Setup `AppComponent` with `<router-outlet>`

This is the shell that dynamically renders the matched route component.

```ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <h2>Angular Routing Demo</h2>
    <nav>
      <a routerLink="/login">Login</a>
      <a routerLink="/dashboard">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
```

---

### 4. Sample Route Components

#### `login.component.ts`

```ts
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-login',
  template: `<h3>Login Page</h3>`
})
export class LoginComponent {}
```

#### `dashboard.component.ts`

```ts
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  template: `<h3>Dashboard</h3>`
})
export class DashboardComponent {}
```

---

## ✨ Optional Enhancements

### Navigate Programmatically

```ts
constructor(private router: Router) {}

loginSuccess() {
  this.router.navigate(['/dashboard']);
}
```

---

### Route Params

```ts
{ path: 'task/:id', component: TaskDetailsComponent }
```

Read it inside `TaskDetailsComponent`:

```ts
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
}
```

---

