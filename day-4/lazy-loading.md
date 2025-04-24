
## Lazy Loading in Angular (Standalone)

### Why Lazy Load?
- Reduces initial bundle size
- Speeds up first-page load
- Loads feature modules or components only when needed

---

### Lazy Loading a Standalone Component

Let’s say you have a `TaskModule` feature with a `TaskListComponent`.

### Step 1: Create a Lazy Component

```ts
// tasks/task-list.component.ts
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-task-list',
  template: `<h3>Task List</h3>`,
})
export class TaskListComponent {}
```

### Step 2: Add Lazy Route in `app.routes.ts`

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/task-list.component').then(m => m.TaskListComponent)
  }
];
```

> This will load `task-list.component.ts` **only when user navigates to `/tasks`**

### Step 3: Navigate to Lazy Loaded Component

```html
<a routerLink="/tasks">Task List</a>
```


### Step 4: Test Lazy Loading

- Run the application
- Click on the "Task List" link
- Check the network tab in DevTools
- You should see a separate request for `task-list.component.js`
- This confirms that the component was loaded lazily
- The initial bundle size should be smaller
- The lazy-loaded component should load only when you navigate to it
- This improves performance and user experience
- You can also lazy load other resources like services, modules, etc.