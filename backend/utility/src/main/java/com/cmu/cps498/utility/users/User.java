/**
 *  Dev: Seth Glover
 *  Description: This is the User class that will be used to create the user table in the database.
 *  The user table will store the user's email, password, role, and isActive status--which will be useful for teachers
 */

package com.cmu.cps498.utility.users;

import jakarta.persistence.*; // JPA annotations for entity mapping
import jakarta.validation.constraints.Email; // Email validation annotation
import lombok.Getter; // Lombok annotation to generate getter methods
import lombok.Setter; // Lombok annotation to generate setter methods
import java.time.LocalDateTime; // Java 8 time API for timestamps

@Entity // Marks the class as an JPA entity for mapping to a table
@Getter
@Setter
public class User {
    @Email // pirmary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(nullable = false)
    private boolean isActive = true;

    // might need these not sure yet.
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private LocalDateTime lastLogin;

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
    // -------- ^ Delete If not needed------------//

}
