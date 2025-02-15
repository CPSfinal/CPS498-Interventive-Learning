package com.cmu.cps498.assessmentmanager.entities;

import jakarta.persistence.*;

@Entity
@Table(name="queues")
public class Queue {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;

    @Column(nullable = false)
    private String exchange;

    @Column(nullable = false)
    private String queue;
}
