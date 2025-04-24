package com.rbi.bankapp.service;

import com.rbi.bankapp.model.LoanRequest;
import com.rbi.bankapp.repository.LoanRequestRepository;
import org.springframework.stereotype.Service;

@Service
public class LoanService {

    private LoanRequestRepository loanRequestRepository;
    public LoanService(LoanRequestRepository loanRequestRepository) {
        this.loanRequestRepository = loanRequestRepository;
    }

    public void createLoanRequest(LoanRequest loanRequest) {
        this.loanRequestRepository.save(loanRequest);
    }




}
