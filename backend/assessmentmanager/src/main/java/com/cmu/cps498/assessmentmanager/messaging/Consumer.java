package com.cmu.cps498.assessmentmanager.messaging;

import com.cmu.cps498.assessmentmanager.config.RabbitMQConfig;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class Consumer {

    @RabbitListener(queues = RabbitMQConfig.queueName)
    public void receiveMessage(String message)
    {
        System.out.println("Received message: " + message);
    }

}