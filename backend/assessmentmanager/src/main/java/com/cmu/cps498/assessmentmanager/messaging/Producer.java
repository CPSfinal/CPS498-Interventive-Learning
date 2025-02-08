package com.cmu.cps498.assessmentmanager.messaging;

import com.cmu.cps498.assessmentmanager.config.RabbitMQConfig;
import lombok.AllArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class Producer {
    private final RabbitTemplate rabbitTemplate;

    public void sendAssessment(String assessmentData) {
        rabbitTemplate.convertAndSend(RabbitMQConfig.topicExchangeName, "", assessmentData);
        System.out.println("Assessment sent: " + assessmentData);
    }
}
