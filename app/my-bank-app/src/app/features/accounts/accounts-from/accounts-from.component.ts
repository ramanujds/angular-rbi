import { Component, inject, Inject } from '@angular/core';
import { BankAccount } from '../../../models/BankAccount';
import { CommonModule } from '@angular/common';
import { AccountsService } from '../accounts.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-accounts-from',
  imports: [CommonModule, FormsModule],
  templateUrl: './accounts-from.component.html',
  styleUrl: './accounts-from.component.css'
})
export class AccountsFromComponent {

  // constructor(private accountService:AccountsService){}

  accountService = inject(AccountsService);

  accountList : Array<BankAccount> = [];

  createAccount(account:BankAccount) {

    console.log(account)
    // this.accountService.createAccount(accountName);
  }

}
