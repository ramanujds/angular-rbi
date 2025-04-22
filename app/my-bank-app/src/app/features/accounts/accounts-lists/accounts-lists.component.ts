import { Component, inject, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { BankAccount } from '../../../models/BankAccount';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts-lists',
  imports: [CommonModule],
  templateUrl: './accounts-lists.component.html',
  styleUrl: './accounts-lists.component.css'
})
export class AccountsListsComponent implements OnInit {

  // constructor(public accountService:AccountsService) {
  // }

  // accountList:Array<BankAccount>=[];

  private accountService=inject(AccountsService);

  accountList = this.accountService.getAccounts();

  ngOnInit(): void {
  }



}
