package com.cmu.cps498.assessmentmanager;

import com.cmu.cps498.assessmentmanager.messaging.Producer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AssessmentmanagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AssessmentmanagerApplication.class, args);
	}

	@Autowired
	private Producer rabbitMQProducer;
	@Bean
	public CommandLineRunner rabbitMQTest() {
		return args -> rabbitMQProducer.sendMessage("Test message");
	}
}
