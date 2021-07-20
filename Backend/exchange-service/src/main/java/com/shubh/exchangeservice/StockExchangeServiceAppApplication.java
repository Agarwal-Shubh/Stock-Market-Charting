package com.shubh.exchangeservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class StockExchangeServiceAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockExchangeServiceAppApplication.class, args);
	}

}
