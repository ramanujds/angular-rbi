import { Routes } from '@angular/router';
import { AccountsFromComponent } from './features/accounts/accounts-from/accounts-from.component';
import { AccountsListsComponent } from './features/accounts/accounts-lists/accounts-lists.component';
import { LoansFormComponent } from './features/loans/loans-form/loans-form.component';
import { ErrorComponent } from './pages/error/error.component';
import { AccountDetailsComponent } from './features/accounts/account-details/account-details.component';

export const routes: Routes = [
    { path:'', redirectTo:'/accounts', pathMatch:'full'},
    {path:'accounts', children:[
        {path:'create', component:AccountsFromComponent},
        {path:'list',component:AccountsListsComponent},
        {path:':accNumber',component:AccountDetailsComponent}
    ]}
    ,
    {path:'loan-request',component:LoansFormComponent},
    {path:'error',component:ErrorComponent},
    {path:'**',redirectTo:'/error'}
];
