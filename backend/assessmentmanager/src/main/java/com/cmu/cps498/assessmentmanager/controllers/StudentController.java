package com.cmu.cps498.assessmentmanager.controllers;

import com.cmu.cps498.assessmentmanager.dtos.RegisterStudentDTO;
import com.cmu.cps498.assessmentmanager.services.CourseService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/students")
@AllArgsConstructor
public class StudentController {

    private final CourseService courseService;

    @PostMapping("/register")
    @PreAuthorize("hasAnyRole('TEACHER', 'ADMIN')")
public ResponseEntity<String> registerStudent(@RequestBody RegisterStudentDTO studentDetails) {
        String queueName = courseService.startListeningForStudent(studentDetails);
        if (queueName != null)
            return ResponseEntity.ok("Student registered with queue: " + queueName);
        return ResponseEntity.notFound().build();
    }
}
