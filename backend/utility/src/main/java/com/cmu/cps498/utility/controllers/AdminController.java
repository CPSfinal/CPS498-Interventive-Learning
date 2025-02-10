package com.cmu.cps498.utility.controllers;

import com.cmu.cps498.utility.dtos.RegisterUserDto;
import com.cmu.cps498.utility.entities.User;
import com.cmu.cps498.utility.services.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {
    private AdminService service;

    @GetMapping("/addTeacher")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<User> addTeacher(@RequestBody RegisterUserDto teacher) {

        return ResponseEntity.ok(service.createTeacher(teacher));
    }

}
