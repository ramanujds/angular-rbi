import { inject, Injectable, Signal, signal } from '@angular/core';
import { BankAccount } from '../../models/BankAccount';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private acoountsClient=inject(HttpClient)

  readonly baseUrl = "http://localhost:3000/accounts";

  constructor() { }


  private accountList = signal<BankAccount[]>([])
  
    createAccount(account:BankAccount): Observable<Array<BankAccount>> {
      
         return  this.acoountsClient.post<Array<BankAccount>>(this.baseUrl,account);

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

      fetchAccountByNumber(accountNumber:string):Observable<Array<BankAccount>>{
        
          return this.acoountsClient.get<Array<BankAccount>>(this.baseUrl+"?accountNumber="+accountNumber)
      }


}
