package com.cmu.cps498.assessmentmanager.controllers;

import com.cmu.cps498.assessmentmanager.services.ConsumerService;
import com.cmu.cps498.assessmentmanager.services.QueueService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> registerStudent(@PathVariable String studentId) {
        consumerService.startListeningForStudent(studentId);
        return ResponseEntity.ok("Student registered with queue: " + studentId);
    }
}
