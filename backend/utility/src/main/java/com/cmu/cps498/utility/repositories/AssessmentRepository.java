package com.cmu.cps498.utility.repositories;

import com.cmu.cps498.utility.entities.Assessment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssessmentRepository extends CrudRepository<Assessment, Integer> {

}
