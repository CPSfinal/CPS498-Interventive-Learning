package com.cmu.cps498.assessmentmanager.controllers;

import com.cmu.cps498.assessmentmanager.services.ConsumerService;
import com.cmu.cps498.assessmentmanager.services.QueueService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/students")
@AllArgsConstructor
public class StudentController {

    private final ConsumerService consumerService;

    @PostMapping("/register/{studentId}")
    @PreAuthorize("hasAnyRole('TEACHER', 'ADMIN')")
    public ResponseEntity<String> registerStudent(@PathVariable long studentId) {
        if (consumerService.verifyStudent(studentId)) {
            consumerService.startListeningForStudent(studentId);
            return ResponseEntity.ok("Student registered with queue: " + studentId);
        }
        return ResponseEntity.notFound().build();
    }
}
