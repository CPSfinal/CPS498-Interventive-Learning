package com.cmu.cps498.utility.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;
import java.time.LocalDateTime;

@Table(name = "assessments")
@Entity
@Getter
@Setter
public class Assessment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;

    @Column(unique = true, length = 100, nullable = false)
    private String name;

    @Column()
    private Integer skillId;

    @ElementCollection
    @CollectionTable(name = "assessment_questions", joinColumns = @JoinColumn(name = "assessment_id"))
    @Column(name = "question")
    private List<String> questions;

    // Map the list of answers to a separate table.
    @ElementCollection
    @CollectionTable(name = "assessment_answers", joinColumns = @JoinColumn(name = "assessment_id"))
    @Column(name = "answer")
    private List<String> answers;



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

