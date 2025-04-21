package com.rbi.mytaskmanager.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Task {
    @Id
    private String id;
    private String title;
    private String description;
    private boolean completed;
}
