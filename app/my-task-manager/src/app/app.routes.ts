import { Routes } from '@angular/router';
import { TaskListComponent } from './features/tasks/task-list/task-list.component';
import { TaskFormComponent } from './features/tasks/task-form/task-form.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/auth/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'tasks',
        loadChildren: () => import('./features/tasks/task.routes').then(m => m.taskRoutes)
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      }
];
