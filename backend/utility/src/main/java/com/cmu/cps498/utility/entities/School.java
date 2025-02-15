package com.cmu.cps498.utility.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import com.cmu.cps498.utility.entities.User;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Table(name = "schools")
@Entity
@Getter
@Setter
public class School {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;

    @Column(unique = true, length = 100, nullable = false)
    private String name;


    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    // logic for time stamps.
    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}

