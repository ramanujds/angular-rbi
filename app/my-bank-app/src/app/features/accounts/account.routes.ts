// src/app/features/tasks/task.routes.ts
import { Routes } from '@angular/router';

export const accountRoutes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('./accounts-lists/accounts-lists.component').then(m => m.AccountsListsComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./accounts-from/accounts-from.component').then(m => m.AccountsFromComponent)
  },
  {
    path:':accNumber',
    loadComponent:()=> import('./account-details/account-details.component').then(m=>m.AccountDetailsComponent)
  }
];
