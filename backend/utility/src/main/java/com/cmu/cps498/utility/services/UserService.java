package com.cmu.cps498.utility.services;

import org.springframework.stereotype.Service;
import com.cmu.cps498.utility.repositories.UserRepository;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Check if student is proficient in a skill set
    public boolean isStudentProficientInSkillSet(Integer studentId, String skillSetId) {
        Optional<Boolean> result = userRepository.isStudentProficientInSkillSet(studentId, skillSetId);
        return result.orElse(false); // Default to false if no record exists
    }

    // Get student's skill set scores
    public List<Object[]> getStudentSkillSetScores(Integer studentId) {
        return userRepository.getStudentSkillSetScores(studentId);
    }
}
