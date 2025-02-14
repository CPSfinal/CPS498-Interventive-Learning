package com.cmu.cps498.utility.controllers;

import com.cmu.cps498.utility.dtos.AssignStudentDto;
import com.cmu.cps498.utility.dtos.RegisterUserDto;
import com.cmu.cps498.utility.dtos.RegisterSchoolDto;
import com.cmu.cps498.utility.dtos.AddCourseDto;
import com.cmu.cps498.utility.entities.User;
import com.cmu.cps498.utility.entities.School;
import com.cmu.cps498.utility.entities.Course;
import com.cmu.cps498.utility.services.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {
    private AdminService service;

    //@PreAuthorize("isAuthenticated()")


    @GetMapping("/addTeacher")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<User> addTeacher(@RequestBody RegisterUserDto teacher) {

        return ResponseEntity.ok(service.createTeacher(teacher));
    }

    @GetMapping("/addStudent")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<User> addStudent(@RequestBody RegisterUserDto student) {

        return ResponseEntity.ok(service.createStudent(student));
    }

    @PostMapping("/addSchool")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<School> addSchool(@RequestBody RegisterSchoolDto school, @AuthenticationPrincipal User currentUser) {

        return ResponseEntity.ok(service.createSchool(school));
    }

    @PostMapping("/addCourse")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<Course> addCourse(@RequestBody AddCourseDto course) {

        return ResponseEntity.ok(service.createCourse(course));
    }

    @PostMapping("/assignStudent")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<String> assignStudent(@RequestBody AssignStudentDto assignStudent) {
        System.out.print("hit");
        return ResponseEntity.ok(service.AssignStudent(assignStudent));
    }

}
