package com.cmu.cps498.utility.services;

import com.cmu.cps498.utility.dtos.RegisterUserDto;
import com.cmu.cps498.utility.entities.Role;
import com.cmu.cps498.utility.entities.User;
import com.cmu.cps498.utility.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AdminService {
    private UserRepository repository;
    private PasswordEncoder encoder;
    public User createTeacher(RegisterUserDto teacher) {
        var user = new User();
        user.setEmail(teacher.getEmail());
        user.setPassword(encoder.encode(teacher.getPassword()));
        user.setRole(Role.TEACHER);

        return repository.save(user);
    }
}
