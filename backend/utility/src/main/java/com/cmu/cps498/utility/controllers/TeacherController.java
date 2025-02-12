package com.cmu.cps498.utility.controllers;

import org.springframework.web.bind.annotation.*;
import com.cmu.cps498.utility.services.UserService;
import java.util.List;

@RestController
@RequestMapping("/api/teacher")
public class TeacherController {
    private final UserService userService;

    public TeacherController(UserService userService) {
        this.userService = userService;
    }

    // ✅ Check if a student is proficient in a specific skill set
    @GetMapping("/students/{studentId}/proficiency/{skillSetId}")
    public boolean isStudentProficientInSkillSet(@PathVariable Integer studentId, @PathVariable String skillSetId) {
        return userService.isStudentProficientInSkillSet(studentId, skillSetId);
    }

    // ✅ Get all skill set scores for a student
    @GetMapping("/students/{studentId}/skillset-scores")
    public List<Object[]> getStudentSkillSetScores(@PathVariable Integer studentId) {
        return userService.getStudentSkillSetScores(studentId);
    }
}