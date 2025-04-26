import { Component, effect, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankAccount } from '../../../models/BankAccount';
import { AccountsService } from '../accounts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-details',
  imports: [CommonModule],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent implements OnInit {

  private currentRoute = inject(ActivatedRoute)
  private accountService = inject(AccountsService)

  account?: BankAccount;

  accountDetails?: BankAccount;

  constructor() {
    effect(
      () => {
        const accNumber = this.currentRoute.snapshot.paramMap.get('accNumber');
        if (accNumber != null)
          this.accountService.fetchAccountByNumber(accNumber).subscribe(
            response => this.accountDetails = response
          )

      }
    )
  }

  ngOnInit(): void {
    // this.currentRoute.params.subscribe(
    //   param => {
    //     this.accountNumber=param['accNumber']
    //     // fetch account deatils from backend

    //   }
    // )
    //   const accNumber = this.currentRoute.snapshot.paramMap.get('accNumber');
    //   if(accNumber!=null)
    //     this.accountService.fetchAccountByNumber(accNumber).subscribe(
    //   response => this.accountDetails=response
    // )


  }

}
