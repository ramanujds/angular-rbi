import { Injectable, Signal, signal } from '@angular/core';
import { BankAccount } from '../../models/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  

  constructor() { }


  private accountList = signal<BankAccount[]>([])
  
    createAccount(accountName:string) {
        let account:BankAccount = {
            id:this.accountList.length+1,
            accountNumber:crypto.randomUUID(),
            accountType:'Savings',
            accountHolderName:accountName,
            createdAt:new Date(),
            balance:0
        }
  
        this.accountList.update(acc => [...acc, account] )
        

      }

      getAccounts():Signal<BankAccount[]>{
        return this.accountList;
      }


}
