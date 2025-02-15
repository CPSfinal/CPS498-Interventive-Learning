package com.cmu.cps498.assessmentmanager.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/teachers")
@AllArgsConstructor
public class TeacherController {

    @PostMapping("/assessment")
    @PreAuthorize("hasRole('TEACHER')")
    public ResponseEntity<String> postAssessment(@RequestBody String assessmentData) {
        //Todo: post assessment on exchange
        return ResponseEntity.ok("Send assessment");
    }
}
