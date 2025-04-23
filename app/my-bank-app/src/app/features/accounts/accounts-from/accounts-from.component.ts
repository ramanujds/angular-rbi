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
  accountName:string='';

  createAccount(account:BankAccount) {

    this.accountService.createAccount(account).subscribe(
      next => {
        console.log(next)
        this.accountService.getAccounts()
      },
      error =>{
        console.error("Server not available")
      },
      () => console.log("Done")
    )
  }

}
