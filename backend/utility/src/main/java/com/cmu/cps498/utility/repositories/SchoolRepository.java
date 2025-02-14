package com.cmu.cps498.utility.repositories;

import com.cmu.cps498.utility.entities.School;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SchoolRepository extends CrudRepository<School, Integer> {

}
