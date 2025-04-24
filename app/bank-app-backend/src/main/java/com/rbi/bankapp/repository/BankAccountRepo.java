package com.rbi.bankapp.repository;

import com.rbi.bankapp.model.BankAccount;
import com.rbi.bankapp.model.LoanRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BankAccountRepo extends JpaRepository<BankAccount, Long> {

    Optional<BankAccount> findByAccountNumber(String accountNumber);

    List<LoanRequest> findLoanRequestsByAccountNumber(String accountNumber);


}
