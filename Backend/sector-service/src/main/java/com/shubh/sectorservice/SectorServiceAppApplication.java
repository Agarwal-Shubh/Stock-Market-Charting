package com.shubh.sectorservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


@EnableDiscoveryClient
@SpringBootApplication
public class SectorServiceAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SectorServiceAppApplication.class, args);
	}
}
