import { inject, Injectable, Signal, signal } from '@angular/core';
import { BankAccount } from '../../models/BankAccount';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private acoountsClient=inject(HttpClient)

  readonly baseUrl = "http://localhost:3000/accounts";

  constructor() { }


  private accountList = signal<BankAccount[]>([])
  
    createAccount(accountName:string) {
        let account:BankAccount = {
            id:this.accountList().length?this.accountList()[this.accountList().length-1].id+1:1,
            accountNumber:crypto.randomUUID(),
            accountType:'Savings',
            accountHolderName:accountName,
            createdAt:new Date(),
            balance:0
        }
  
        this.acoountsClient.post<Array<BankAccount>>(this.baseUrl,account).subscribe(
          response => this.getAccounts()
        )
        

      }

      getAccounts():Signal<BankAccount[]>{

        this.acoountsClient.get<Array<BankAccount>>(this.baseUrl).subscribe(
          response => this.accountList.update(acc => response)
        )

        return this.accountList;
      }

      deleteAccount(id:number){
        this.acoountsClient.delete(this.baseUrl+"/"+id).subscribe(
          response =>  this.getAccounts()
        )
       
      }


}
