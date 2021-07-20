package com.shubh.stockpriceservice.application.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.shubh.stockpriceservice.application.models.StockPrice;

@FeignClient(value="company-service", url="http://localhost:8080")
public interface CompanyClient {
	@PostMapping(path="/companies/{companyCode}/stockPrice")
	public void addStockPriceToCompany(@PathVariable String companyCode, @RequestBody StockPrice stockPrice);
}
