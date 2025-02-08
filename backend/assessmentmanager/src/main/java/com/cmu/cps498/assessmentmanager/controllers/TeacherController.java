package com.cmu.cps498.assessmentmanager.controllers;

import com.cmu.cps498.assessmentmanager.messaging.Producer;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/teachers")
@AllArgsConstructor
public class TeacherController {

    private Producer producer;

    @PostMapping("/assessment")
    public ResponseEntity<String> postAssessment(@RequestBody String assessmentData) {
        producer.sendAssessment(assessmentData);
        return ResponseEntity.ok("Send assessment");
    }
}
