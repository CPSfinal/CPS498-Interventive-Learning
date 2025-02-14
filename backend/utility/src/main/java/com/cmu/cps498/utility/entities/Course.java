package com.cmu.cps498.utility.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.cmu.cps498.utility.entities.User;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Table(name = "course")
@Entity
@Getter
@Setter
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer courseId;

    @Column(nullable = false)
    private Integer contentId;

    @Column(length = 100, nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer teacherId;

    @Column(nullable = false)
    private String subject;

    @Column(nullable = false)
    private Integer grade;

    @Column(nullable = false)
    private boolean isActive = true;


    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "course_student", // Name of the join table
            joinColumns = @JoinColumn(name = "courseId"), // Column in the join table that references Course
            inverseJoinColumns = @JoinColumn(name = "id") // Column in the join table that references Student
    )
    private Set<User> students = new HashSet<>();

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private LocalDateTime lastLogin;

    public Set<User> getStudents() {
        if (students == null) {
            students = new HashSet<>();
        }
        return students;
    }


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