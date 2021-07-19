package com.shubh.companyservice.application.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.shubh.companyservice.application.models.Company;

@FeignClient(value="sector-service",url="http://localhost:8090")
public interface SectorClient {
	@PostMapping("/sectors/{sectorName}/companies")
	public void addCompanyToSector(@PathVariable String sectorName, @RequestBody Company company);
}
