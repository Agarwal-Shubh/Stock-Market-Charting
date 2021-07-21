package com.shubh.userservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class UserServiceAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserServiceAppApplication.class, args);
	}
	


}
