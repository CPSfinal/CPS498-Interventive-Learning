package com.cmu.cps498.assessmentmanager.repositories;

import com.cmu.cps498.assessmentmanager.entities.Course;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CourseRepository extends CrudRepository<Course, Long> {
    Optional<Course> findById(long id);
}
