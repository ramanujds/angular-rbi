package com.rbi.bankapp.service;

import com.rbi.bankapp.model.BankAccount;
import com.rbi.bankapp.repository.BankAccountRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankAccountService {

    private BankAccountRepo bankAccountRepo;

    public BankAccountService(BankAccountRepo bankAccountRepo) {
        this.bankAccountRepo = bankAccountRepo;
    }

    public BankAccount createBankAccount(BankAccount bankAccount) {
       return this.bankAccountRepo.save(bankAccount);
    }

    public BankAccount getBankAccountByAccountNumber(String accountNumber) {
        return this.bankAccountRepo.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new RuntimeException("Bank account not found"));
    }

    public void deleteBankAccountByAccountNumber(String accountNumber) {
        BankAccount bankAccount = this.getBankAccountByAccountNumber(accountNumber);
        this.bankAccountRepo.delete(bankAccount);
    }

    public void updateBankAccount(BankAccount bankAccount) {
        BankAccount existingAccount = this.getBankAccountByAccountNumber(bankAccount.getAccountNumber());
        if(bankAccount.getAccountNumber()!= null) {
            existingAccount.setAccountNumber(bankAccount.getAccountNumber());
        }
        if(bankAccount.getAccountHolderName()!= null) {
            existingAccount.setAccountHolderName(bankAccount.getAccountHolderName());
        }
        if(bankAccount.getBalance()!= 0) {
            existingAccount.setBalance(bankAccount.getBalance());
        }
        if(bankAccount.getAccountType()!= null) {
            existingAccount.setAccountType(bankAccount.getAccountType());
        }
        if(bankAccount.getCreatedAt()!= null) {
            existingAccount.setCreatedAt(bankAccount.getCreatedAt());
        }
        this.bankAccountRepo.save(existingAccount);
    }


    public List<BankAccount> getAllAccounts() {
        return this.bankAccountRepo.findAll();
    }
}
