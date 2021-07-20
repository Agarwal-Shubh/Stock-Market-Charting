package com.shubh.adminservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import de.codecentric.boot.admin.config.EnableAdminServer;

@EnableAdminServer
@SpringBootApplication
public class AdminServiceAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdminServiceAppApplication.class, args);
	}

}
