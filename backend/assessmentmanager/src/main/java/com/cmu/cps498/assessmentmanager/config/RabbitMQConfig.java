package com.cmu.cps498.assessmentmanager.config;

import org.springframework.amqp.core.*;
import org.springframework.context.annotation.Configuration;

import org.springframework.context.annotation.Bean;

@Configuration
public class RabbitMQConfig {
    public  static final String topicExchangeName = "assessment-manager-exchange";

    public static final String queueName = "assessment-manager";

    public static final String routingKey = "routing-key";

    @Bean public Queue queue()
    {
        return new Queue(queueName, false);
    }

    @Bean public Exchange exchange()
    {
        return new DirectExchange(topicExchangeName);
    }

    @Bean
    public Binding binding(Queue queue, Exchange exchange)
    {
        return BindingBuilder.bind(queue)
                .to(exchange)
                .with(routingKey)
                .noargs();
    }
}
