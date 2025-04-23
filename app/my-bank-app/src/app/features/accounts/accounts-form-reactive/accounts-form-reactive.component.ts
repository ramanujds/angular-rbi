import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-accounts-form-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './accounts-form-reactive.component.html',
  styleUrl: './accounts-form-reactive.component.css'
})
export class AccountsFormReactiveComponent {

  formBuilder = inject(FormBuilder);

  accountForm = this.formBuilder.group(
    {
      accountHolderName:['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      accountNumber:['',[Validators.required]],
      balance:[0,[Validators.required]],
      accountType:['Savings',[Validators.required]],
      createdAt:['',[Validators.required]]
    }
  )

  createAccount(account:any){
    console.log(account);
    
  }


}
