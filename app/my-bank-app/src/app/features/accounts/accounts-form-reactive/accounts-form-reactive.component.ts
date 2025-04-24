import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BankAccount } from '../../../models/BankAccount';
import { AccountsService } from '../accounts.service';
import { CommonModule } from '@angular/common';
import { accountNumberValidator } from '../../../validators/account-number-validator';

@Component({
  selector: 'app-accounts-form-reactive',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './accounts-form-reactive.component.html',
  styleUrl: './accounts-form-reactive.component.css'
})
export class AccountsFormReactiveComponent {

  formBuilder = inject(FormBuilder);
  accountService = inject(AccountsService);

  accountForm = this.formBuilder.group(
    {
      accountHolderName:['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      accountNumber:['',[Validators.required],[accountNumberValidator(this.accountService)]],
      balance:[0,[Validators.required]],
      accountType:['Savings',[Validators.required]],
      createdAt:['',[Validators.required]],
      addressForm:this.formBuilder.group(
        {
          city:['',[Validators.required]],
          state:[''],
          zipCode:['']
        }
      )
    }
  )

  createAccount(account:any){
    
    this.accountService.createAccount(account).subscribe(
      next => console.log(next)
    )
  }


}
