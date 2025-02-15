package com.cmu.cps498.assessmentmanager.services;

import com.cmu.cps498.assessmentmanager.dtos.CourseDTO;
import com.cmu.cps498.assessmentmanager.dtos.RegisterStudentDTO;
import com.cmu.cps498.assessmentmanager.entities.Course;
import com.cmu.cps498.assessmentmanager.entities.Role;
import com.cmu.cps498.assessmentmanager.entities.User;
import com.cmu.cps498.assessmentmanager.repositories.CourseRepository;
import com.cmu.cps498.assessmentmanager.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class CourseService {
    private final QueueService queueService;
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    private final ConnectionFactory connectionFactory;

    public Long createCourse(CourseDTO course) {
        if (verifyInstructor(course.instructorId()) && verifyCourse(course.courseId(), course.instructorId()))
            return queueService.registerCourse(course);
        return null;
    }

    public String startListeningForStudent(RegisterStudentDTO studentDetails) {
        // Verify entities exist before attempting to connect
        if (!verifyStudent(studentDetails.studentId()) ||
                !verifyInstructor(studentDetails.instructorId()) ||
                !verifyCourse(studentDetails.courseId(), studentDetails.instructorId()))
            return null;
        // create the queue for the student and return null if creation failed
        String queueName = queueService.registerStudent(studentDetails.studentId());
        if (queueName == null) {
            return null;
        }
        // set the listener for the queue to handle received messages
        setStudentListener(queueName);
        return queueName;
    }

    private boolean verifyInstructor(long instructorId) {
        Optional<User> instructor = userRepository.findById(instructorId);
        return instructor.isPresent() && instructor.get().getRole() == Role.TEACHER;
    }

    private boolean verifyCourse(long courseId, long instructorId) {
        Optional<Course> course = courseRepository.findById(courseId);
        return course.isPresent() && course.get().getInstructorId() == instructorId;
    }

    private boolean verifyStudent(long studentId) {
        Optional<User> student = userRepository.findById(studentId);
        return student.isPresent() && student.get().getRole() == Role.STUDENT;
    }

    private void setStudentListener(String queueName) {
        SimpleMessageListenerContainer container = new SimpleMessageListenerContainer();
        container.setConnectionFactory(connectionFactory);
        container.setQueueNames(queueName);
        container.setMessageListener(new MessageListenerAdapter(this, "handleMessage"));
        container.start();
        System.out.println("Consumer started for: " + queueName);
    }

    private void handleMessage(String message) {
        System.out.println("Received message: " + message);
    }
}
