/**
 *  Dev: Seth Glover
 *  Description: This is the User class that will be used to create the user table in the database.
 *  The user table will store the user's email, password, role, and isActive status--which will be useful for teachers
 */

package com.cmu.cps498.users;

@Entity //Marks the class as an JPA entity for mapping to a table
@Getter // not sure what the package was for this. 
@Setter // not sure what the package was for this.
public class User {
    @Id //pirmary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumertaed(EnumType.STRING)
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
    Protected void onUpdate() {
        this.updateedAt = LocalDateTime.now();
    }
    //-------- ^ Delete If not needed------------//

}
