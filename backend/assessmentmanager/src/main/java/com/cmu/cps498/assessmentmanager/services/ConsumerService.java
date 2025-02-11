package com.cmu.cps498.assessmentmanager.services;

import com.cmu.cps498.assessmentmanager.entities.Role;
import com.cmu.cps498.assessmentmanager.entities.User;
import com.cmu.cps498.assessmentmanager.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class ConsumerService {

    private final ConnectionFactory connectionFactory;
    private final QueueService queueService;
    private final UserRepository userRepository;

    public boolean verifyStudent(long studentId) {
       Optional<User> student = userRepository.findById(studentId);
       return student.isPresent() && student.get().getRole() == Role.STUDENT;
    }

    public void startListeningForStudent(long studentId) {
        String queueName = queueService.registerStudent(studentId); // Ensure queue exists
        SimpleMessageListenerContainer container = new SimpleMessageListenerContainer();
        container.setConnectionFactory(connectionFactory);
        container.setQueueNames(queueName);
        container.setMessageListener(new MessageListenerAdapter(this, "handleMessage"));
        container.start();
        System.out.println("Consumer started for: " + queueName);
    }

    public void handleMessage(String message) {
        System.out.println("Received message: " + message);
    }
}
