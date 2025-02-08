package com.cmu.cps498.assessmentmanager.messaging;

import com.cmu.cps498.assessmentmanager.config.RabbitMQConfig;
import lombok.AllArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class Producer {
    private RabbitTemplate rabbitTemplate;

    public void sendMessage(String message)
    {
        rabbitTemplate.convertAndSend(
                RabbitMQConfig.topicExchangeName, RabbitMQConfig.routingKey, message);
    }
}
