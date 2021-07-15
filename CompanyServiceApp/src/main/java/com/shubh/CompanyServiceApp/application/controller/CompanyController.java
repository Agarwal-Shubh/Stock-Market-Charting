package com.shubh.CompanyServiceApp.application.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.shubh.CompanyServiceApp.application.services.*;
import com.shubh.CompanyServiceApp.application.dto.*;
import java.util.*;
@RestController
@RequestMapping("/companyService")
public class CompanyController {
	
	@Autowired
	private CompanyService companyService;
//	@GetMapping(path = "")
//	public ResponseEntity<String> controllerTest() 
//	{
//		return ResponseEntity
//				.ok("This is Company Service Controller");
//	}
	@GetMapping(path="")
	public ResponseEntity<List<CompanyDTO>> getAllCompanies(){
		return ResponseEntity.ok(companyService.getCompanies());
	}
	
	@PostMapping(path="addCompany")
	public ResponseEntity<CompanyDTO> addCompany(@RequestBody CompanyDTO companyDTO){
		return ResponseEntity.ok(companyService.addCompany(companyDTO));
	}
}
