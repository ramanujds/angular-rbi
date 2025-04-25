package com.rbi.bankapp.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "user_record")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(unique = true)
    private String username;

    private String password;

    private String role;


}
