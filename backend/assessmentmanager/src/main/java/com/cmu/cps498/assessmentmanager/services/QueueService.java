package com.cmu.cps498.assessmentmanager.services;

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
    private final FanoutExchange assessmentExchange;

    public String registerStudent(long id) {
        String queueName = "student.queue." + id;

        Queue queue = new Queue(queueName, true);
        rabbitAdmin.declareQueue(queue);

        Binding binding = BindingBuilder.bind(queue).to(assessmentExchange);
        rabbitAdmin.declareBinding(binding);

        System.out.println("Queue created and bound for student: " + id);
        return queueName;
    }
}
