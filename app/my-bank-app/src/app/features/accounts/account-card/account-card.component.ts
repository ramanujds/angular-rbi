import { Component, inject, Input } from '@angular/core';
import { BankAccount } from '../../../models/BankAccount';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShortenTextPipe } from "../shorten-text.pipe";

@Component({
  selector: 'app-account-card',
  imports: [CommonModule, ShortenTextPipe],
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.css'
})
export class AccountCardComponent {

  @Input('account')
  account?:BankAccount;

  private accountService=inject(AccountsService)
  private router= inject(Router)

  delete(id:any){
   if(confirm("Sure to delete?"))
      this.accountService.deleteAccount(id)
  }

  getDetails(accNumber:any){
    console.log("Navigating to /accounts/"+accNumber);
    
      this.router.navigate(['/accounts/'+accNumber])
  }

}
