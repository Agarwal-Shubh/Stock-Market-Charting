package com.shubh.stockpriceservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableDiscoveryClient
@EnableFeignClients
@SpringBootApplication
public class StockServiceAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockServiceAppApplication.class, args);
	}

}
