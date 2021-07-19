package com.shubh.companyservice.application.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.shubh.companyservice.application.models.Company;

@FeignClient(value="exchange-service",url="http://localhost:8085")
public interface ExchangeClient {
	@PostMapping("/exchanges/{exchangeName}/addCompany")
	public void addCompanyToStockExchange(@PathVariable String exchangeName, @RequestBody Company company);
}
