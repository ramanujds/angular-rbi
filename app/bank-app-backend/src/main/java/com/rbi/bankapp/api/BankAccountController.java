package com.rbi.bankapp.api;

import com.rbi.bankapp.model.BankAccount;
import com.rbi.bankapp.service.BankAccountService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/accounts")
@CrossOrigin(origins = "http://localhost:4200")
public class BankAccountController {

    private BankAccountService bankAccountService;

    public BankAccountController(BankAccountService bankAccountService) {
        this.bankAccountService = bankAccountService;
    }

    @GetMapping
    public List<BankAccount> getAllAccounts() {
        return this.bankAccountService.getAllAccounts();
    }

    @GetMapping("/account/{accountNumber}")
    public BankAccount getBankAccountByAccountNumber(@PathVariable String accountNumber) {
        return this.bankAccountService.getBankAccountByAccountNumber(accountNumber);
    }

    @GetMapping("/delete/{accountNumber}")
    public void deleteBankAccountByAccountNumber(@PathVariable String accountNumber) {
        this.bankAccountService.deleteBankAccountByAccountNumber(accountNumber);
    }

    @PatchMapping
    public void updateBankAccount(@RequestBody BankAccount bankAccount) {
        this.bankAccountService.updateBankAccount(bankAccount);
    }

    @PostMapping
    public BankAccount createBankAccount(@RequestBody BankAccount bankAccount) {
        return this.bankAccountService.createBankAccount(bankAccount);
    }


}
