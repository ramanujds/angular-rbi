import { Component, inject, Input } from '@angular/core';
import { BankAccount } from '../../../models/BankAccount';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account-card',
  imports: [],
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.css'
})
export class AccountCardComponent {

  @Input('account')
  account?:BankAccount;

  private accountService=inject(AccountsService)

  delete(id:any){
   if(confirm("Sure to delete?"))
      this.accountService.deleteAccount(id)
  }

}
