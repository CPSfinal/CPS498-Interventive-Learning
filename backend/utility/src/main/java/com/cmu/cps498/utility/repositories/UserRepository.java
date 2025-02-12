package com.cmu.cps498.utility.repositories;

import com.cmu.cps498.utility.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

    // finds all students
    @Query("SELECT u FROM User u WHERE u.role = 'STUDENT'")
    List<User> findAllStudents();

    // finds all students enrolled in a course
    @Query("SELECT u FROM User u JOIN Enrollment e ON u.id = e.studentId WHERE u.role = 'STUDENT' AND e.courseId = :courseId")
    List<User> findStudentsByCourseId(Integer courseId);

    // case insensitive search
    @Query("SELECT u FROM User u WHERE u.role = 'STUDENT' AND LOWER(u.name) LIKE LOWER(CONCAT('%', :name , '%'))")
    List<User> findStudentsByName(String name);

    // Find students by proficiency level
    @Query("SELECT u FROM User u JOIN Proficiency p ON u.id = p.studentId WHERE u.role = 'STUDENT' AND p.level >= :minProficiency")
    List<User> findStudentsByProficiency(Double minProficiency);

    // Find students by completion status (e.g., In Progress, Completed)
    @Query("SELECT u FROM User u JOIN TrackingProgress tp ON u.id = tp.studentId WHERE u.role = 'STUDENT' AND tp.status = :status")
    List<User> findStudentsByCompletionStatus(String status);

    // Find students with recent assessments
    @Query("SELECT DISTINCT u FROM User u JOIN StudentAssessments sa ON u.id = sa.studentId WHERE u.role = 'STUDENT' AND sa.completionDate >= CURRENT_DATE - :days")
    List<User> findStudentsWithRecentAssessments(int days);

    // Find students needing intervention (low proficiency)
    @Query("SELECT u FROM User u JOIN Proficiency p ON u.id = p.studentId WHERE u.role = 'STUDENT' AND p.level < :threshold")
    List<User> findStudentsNeedingIntervention(Double threshold);

    // Get full proficiency report for a student... still need to work on this.
    // @Query("SELECT p FROM Proficiency p WHERE p.studentId = :studentId")
    // List<Proficiency> getStudentProficiencyReport(Integer studentId);

    // Check if a student is proficient in a skill set (score >= 80)
    @Query("SELECT CASE WHEN sa.score >= 80 THEN true ELSE false END FROM StudentAssessments sa " +
            "WHERE sa.studentId = :studentId AND sa.skillSetId = :skillSetId")
    Optional<Boolean> isStudentProficientInSkillSet(Integer studentId, String skillSetId);

    // Get all skill set assessments for a student
    @Query("SELECT sa.skillSetId, sa.score FROM StudentAssessments sa WHERE sa.studentId = :studentId")
    List<Object[]> getStudentSkillSetScores(Integer studentId);

}
