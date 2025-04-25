import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { AccountsService } from "../features/accounts/accounts.service";
import { map } from "rxjs";

export function accountNumberValidator(accountsService:AccountsService):AsyncValidatorFn{

    return (control:AbstractControl) => {
            return accountsService.fetchAccountByNumber(control.value.trim())
                    .pipe(
                        map(
                                response => response ? { 'invalid-account-number': {value:control.value} } : null
                    )
                )
    }

}