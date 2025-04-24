## Route Guards in Angular

### What Is a Route Guard?

A **route guard** lets you control **access to routes** based on conditions like:
- Is the user authenticated?
- Does the user have the right role?
- Has a form been saved?

---

### Create a Guard Using `canActivate`

```ts
// auth.guard.ts
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  return !!token; // returns true if token exists
};
```

> ⚠️ Angular now recommends using **functional guards** (`CanActivateFn`) with standalone APIs.

---

### Use the Guard in Routes

```ts
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard],
  }
];
```

---

## Let's implement a **`canDeactivate` guard** in Angular to **warn the user if they try to navigate away from a form with unsaved changes.**


### Use Case

We have a `TaskFormComponent` with a form. If the user:
- Makes changes,
- Tries to navigate away without saving,

We show a browser confirmation dialog.

---

### 1. Define a Guard Interface (optional but recommended)

```ts
// interfaces/can-deactivate.ts
export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Promise<boolean>;
}
```

---

### 2. Create the `canDeactivate` Guard

```ts
// guards/unsaved-changes.guard.ts
import { CanDeactivateFn } from '@angular/router';
import { CanComponentDeactivate } from '../interfaces/can-deactivate';

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component
) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
```

---

### 3. Implement `canDeactivate()` in Your Form Component

```ts
// task-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CanComponentDeactivate } from '../interfaces/can-deactivate';

@Component({
  standalone: true,
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  imports: [ReactiveFormsModule]
})
export class TaskFormComponent implements CanComponentDeactivate {
  form = this.fb.group({
    title: [''],
    description: ['']
  });

  constructor(private fb: FormBuilder) {}

  private isFormDirty(): boolean {
    return this.form.dirty && !this.form.submitted;
  }

  canDeactivate(): boolean {
    if (this.isFormDirty()) {
      return confirm('You have unsaved changes. Are you sure you want to leave?');
    }
    return true;
  }
}
```

---

### 4. Add the Guard to the Route

```ts
// app.routes.ts
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

export const routes = [
  {
    path: 'task-form',
    loadComponent: () =>
      import('./task-form/task-form.component').then(m => m.TaskFormComponent),
    canDeactivate: [unsavedChangesGuard]
  }
];
```

