package com.cmu.cps498.assessmentmanager.repositories;

import com.cmu.cps498.assessmentmanager.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    Optional<User> findById(Long id);
}
