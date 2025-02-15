package com.cmu.cps498.assessmentmanager.entities;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.Instant;
import java.util.Date;

@Entity
@Table(name="courses")
@Getter
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;

    @Column(name = "created_at")
    private Instant createdAt;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String gradeLevel;

    @Column(nullable = false)
    private String subject;

    @Column(unique = true)
    private Integer instructorId;
}
