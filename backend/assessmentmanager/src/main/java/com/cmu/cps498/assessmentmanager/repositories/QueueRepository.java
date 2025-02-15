package com.cmu.cps498.assessmentmanager.repositories;

import com.cmu.cps498.assessmentmanager.entities.Queue;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QueueRepository extends CrudRepository<Queue, Long> {
}
