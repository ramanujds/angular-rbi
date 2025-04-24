package com.rbi.bankapp.repository;

import com.rbi.bankapp.model.LoanRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRequestRepository extends JpaRepository<LoanRequest, Long> {


}
