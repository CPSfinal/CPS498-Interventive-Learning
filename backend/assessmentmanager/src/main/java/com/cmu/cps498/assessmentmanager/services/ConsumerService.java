package com.cmu.cps498.assessmentmanager.services;

import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.stereotype.Service;

@Service
public class ConsumerService {

    private final ConnectionFactory connectionFactory;
    private final QueueService queueService;

    public ConsumerService(ConnectionFactory connectionFactory, QueueService queueService) {
        this.connectionFactory = connectionFactory;
        this.queueService = queueService;
    }

    public void startListeningForStudent(String studentId) {
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
