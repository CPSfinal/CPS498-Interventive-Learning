package com.cmu.cps498.assessmentmanager.controllers;

import com.cmu.cps498.assessmentmanager.dtos.CourseDTO;
import com.cmu.cps498.assessmentmanager.services.CourseService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {

    private final CourseService courseService;

    @PostMapping("/createClass")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> createClass(@RequestBody CourseDTO courseDTO) {
        Long courseId = courseService.createCourse(courseDTO);
        if (courseId != null)
            return ResponseEntity.ok("Success");
        return ResponseEntity.internalServerError().build();
    }
}
