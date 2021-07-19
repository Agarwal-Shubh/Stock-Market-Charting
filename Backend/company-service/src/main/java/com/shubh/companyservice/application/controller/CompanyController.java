package com.shubh.companyservice.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shubh.companyservice.application.models.Company;
import com.shubh.companyservice.application.services.CompanyService;
@RestController
@RequestMapping("/companyService")
public class CompanyController {
	
	@Autowired
	private CompanyService companyService;

	@GetMapping(path="")
	public ResponseEntity<List<Company>> getAllCompanies(){
		return ResponseEntity.ok(companyService.getCompanies());
	}
	
	@PostMapping(path="addCompany")
	public ResponseEntity<Company> addCompany(@RequestBody Company company){
		return ResponseEntity.ok(companyService.addCompany(company));
	}
}
