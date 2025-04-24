package com.rbi.bankapp.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Generated;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "bank_account")
public class BankAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(unique = true)
    private String accountNumber;
    private String accountHolderName;
    private double balance;
    private String accountType;
    private LocalDateTime createdAt;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<LoanRequest> loanRequests  = new ArrayList<>();
}
