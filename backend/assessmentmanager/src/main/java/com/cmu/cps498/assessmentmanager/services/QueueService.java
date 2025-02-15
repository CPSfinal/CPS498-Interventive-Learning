package com.cmu.cps498.assessmentmanager.services;

import com.cmu.cps498.assessmentmanager.dtos.CourseDTO;
import com.cmu.cps498.assessmentmanager.entities.Course;
import lombok.AllArgsConstructor;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class QueueService {

    private final RabbitAdmin rabbitAdmin;

    public String registerStudent(long id) {
        String queueName = "student.queue." + id;

        Queue queue = new Queue(queueName, true);
        queueName = rabbitAdmin.declareQueue(queue);

        // TODO: update to get correct queue, will need to get instructor id for the student to register
        Binding binding = BindingBuilder.bind(queue).to(assessmentExchange);
        rabbitAdmin.declareBinding(binding);

        System.out.println("Queue created and bound for student: " + id);
        return queueName;
    }

    public Long registerCourse(CourseDTO course) {
        // TODO: create the exchance associated with the given instructor
        return null;
    }
}
