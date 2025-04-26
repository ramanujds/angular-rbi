import { Routes } from '@angular/router';
import { AccountsFromComponent } from './features/accounts/accounts-from/accounts-from.component';
import { AccountsListsComponent } from './features/accounts/accounts-lists/accounts-lists.component';
import { LoansFormComponent } from './features/loans/loans-form/loans-form.component';
import { ErrorComponent } from './pages/error/error.component';
import { AccountDetailsComponent } from './features/accounts/account-details/account-details.component';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './features/auth/auth.guard';

export const routes: Routes = [
    { path:'', redirectTo:'/accounts', pathMatch:'full'},
    {path:'accounts', loadChildren:()=>import('./features/accounts/account.routes').then(m=>m.accountRoutes)},
    {path:'login',component:LoginComponent},
    {path:'loan-request',component:LoansFormComponent},
    {path:'error',component:ErrorComponent},
    {path:'**',redirectTo:'/error'}
];
