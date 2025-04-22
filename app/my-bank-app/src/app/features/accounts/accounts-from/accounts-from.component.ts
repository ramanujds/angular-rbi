import { Component, inject, Inject } from '@angular/core';
import { BankAccount } from '../../../models/BankAccount';
import { CommonModule } from '@angular/common';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts-from',
  imports: [CommonModule],
  templateUrl: './accounts-from.component.html',
  styleUrl: './accounts-from.component.css'
})
export class AccountsFromComponent {

  // constructor(private accountService:AccountsService){}

  accountService = inject(AccountsService);

  accountList : Array<BankAccount> = [];

  createAccount(accountName:string) {
    this.accountService.createAccount(accountName);
  }

}
