package com.rbi.bankapp.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "loan_request")
public class LoanRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int tenure;
    private double amount;
    private String status;
    private LocalDate requestDate;

}
