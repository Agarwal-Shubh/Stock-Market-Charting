package com.shubh.companyservice.application.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.shubh.companyservice.application.models.Company;

@FeignClient("exchange-service")
public interface ExchangeClient {
	@PostMapping("/exchanges/{stockExchangeName}/companies")
	public void addCompanyToStockExchange(@PathVariable String exchangeId, @RequestBody Company company);
}
