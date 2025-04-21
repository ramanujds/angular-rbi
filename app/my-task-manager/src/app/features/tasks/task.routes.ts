// src/app/features/tasks/task.routes.ts
import { Routes } from '@angular/router';

export const taskRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./task-list/task-list.component').then(m => m.TaskListComponent)
  },
  {
    path: 'add',
    loadComponent: () => import('./task-form/task-form.component').then(m => m.TaskFormComponent)
  }
];
