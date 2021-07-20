package com.shubh.stockpriceservice.application.feignclient;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.shubh.stockpriceservice.application.models.Company;

@FeignClient(value="sector-service",url="http://localhost:8090")
public interface SectorClient {

	@GetMapping("/sectors/{sectorName}/companies")
	public List<Company> getSectorCompanies(@PathVariable String sectorName);
}
