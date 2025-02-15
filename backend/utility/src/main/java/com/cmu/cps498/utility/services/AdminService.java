package com.cmu.cps498.utility.services;
import com.cmu.cps498.utility.dtos.*;
import com.cmu.cps498.utility.entities.*;
import com.cmu.cps498.utility.repositories.AssessmentRepository;
import com.cmu.cps498.utility.repositories.SchoolRepository;
import com.cmu.cps498.utility.repositories.UserRepository;
import com.cmu.cps498.utility.repositories.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AdminService {
    private SchoolRepository schoolRepository;
    private UserRepository repository;
    private CourseRepository courseRepository;
    private AssessmentRepository AssessmentRepository;
    private PasswordEncoder encoder;
    public User createTeacher(RegisterUserDto teacher) {
        var user = new User();
        user.setEmail(teacher.getEmail());
        user.setPassword(encoder.encode(teacher.getPassword()));
        user.setRole(Role.TEACHER);

        return repository.save(user);
    }

    public User createStudent(RegisterUserDto student) {
        var user = new User();
        user.setEmail(student.getEmail());
        user.setPassword(encoder.encode(student.getPassword()));
        user.setRole(Role.STUDENT);

        return repository.save(user);
    }

    public School createSchool(RegisterSchoolDto school) {
        var newschool = new School();
        newschool.setName(school.getSchoolname());
        return schoolRepository.save(newschool);

    }

    public Course createCourse(AddCourseDto course) {
        var newCourse = new Course();
        newCourse.setName(course.courseName());
        newCourse.setContentId(course.contentId());
        newCourse.setGrade(course.grade());
        newCourse.setSubject(course.subject());
        newCourse.setTeacherId(course.teacherId());
        return courseRepository.save(newCourse);

    }

    public String AssignStudent(AssignStudentDto assignStudent) {
        Optional<Course> optionalCourse = courseRepository.findById(assignStudent.getCourseId());
        Optional<User> optionalStudent = repository.findById(assignStudent.getStudentId());

        if (optionalCourse.isEmpty() || optionalStudent.isEmpty()) {
            return("Not found");
        }

        Course course = optionalCourse.get();
        User student = optionalStudent.get();

        course.getStudents().add(student);

        // if student-side tracking is added this will be needed
        //student.getCourses().add(course);
        courseRepository.save(course);
        //hold on to this line of code for the same reason
        //repository.save(student);
        return("Success");
    }

    public Assessment createAssessment(CreateAssessmentDto assessmentDto) {
        if(assessmentDto.answers().size() != assessmentDto.questions().size()) {
            //this check should ideally never be triggered
            return(null);
        }
        Assessment newAssessment = new Assessment();

        newAssessment.setName(assessmentDto.courseName());
        newAssessment.setSkillId(assessmentDto.skillId());
        newAssessment.setQuestions(assessmentDto.questions());
        newAssessment.setAnswers(assessmentDto.answers());

        return AssessmentRepository.save(newAssessment);

    }


}
