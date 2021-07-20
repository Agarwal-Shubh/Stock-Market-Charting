package com.shubh.companyservice.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shubh.companyservice.application.dao.CompanyRepository;
import com.shubh.companyservice.application.models.Company;
import com.shubh.companyservice.application.models.Ipo;
import com.shubh.companyservice.application.models.StockPrice;
import com.shubh.companyservice.application.services.CompanyService;
@RestController
@RequestMapping("/companies")
public class CompanyController {
	
	@Autowired
	private CompanyService companyService;

	@GetMapping(path="")
	public ResponseEntity<List<Company>> getAllCompanies(){
		return ResponseEntity.ok(companyService.getCompanies());
	}
	
	@GetMapping(path="/{id}")
	public ResponseEntity<Company> getCompanyById(@PathVariable String id){
		return ResponseEntity.ok(companyService.findById(id));
	}
	
	@PostMapping(path="addCompany")
	public ResponseEntity<Company> addCompany(@RequestBody Company company){
		return ResponseEntity.ok(companyService.addCompany(company));
	}
	
	@GetMapping(path="/matchPattern/{pattern}")
	public ResponseEntity<List<Company>> getMatchingCompanies(@PathVariable String pattern){
		return ResponseEntity.ok(companyService.getMatchingCompanies(pattern));
	}
	
	@PutMapping(path="")
	public ResponseEntity<Company> updateCompany(@RequestBody Company company){
		return ResponseEntity.ok(companyService.editCompany(company));
	}
	
	@DeleteMapping(path="/{id}")
	public void removeCompany(@PathVariable String id) {
		companyService.deleteCompany(id);
	}
	
	@GetMapping(path="/{id}/ipos")
	public ResponseEntity<List<Ipo>> getCompanyIpo(@PathVariable String id){
		List<Ipo> ipo = companyService.getCompanyIpoDetails(id);
		if(ipo == null)
			throw new RuntimeException("Company Not Found for the Id " +id);
		
		return ResponseEntity.ok(ipo);
	}
	
	@GetMapping(path="/{id}/stockPrices")
	public ResponseEntity<List<StockPrice>> getCompanyStockPrices(@PathVariable String id){
		List<StockPrice> stockPrices = companyService.getStockPrices(id);
		if(stockPrices == null)
			throw new RuntimeException("Company Not Found for the Id " +id);
		
		return ResponseEntity.ok(stockPrices);
	}
	
	@PostMapping(path="/{companyName}/ipo")
	public void addIpoToCompany(@PathVariable String companyName, @RequestBody Ipo ipo) {
		Company company = companyService.addIpoToCompany(companyName, ipo);
		if(company == null)
			throw new RuntimeException("Company Not Found for the Company Name "+companyName);
	}
	
	@PostMapping(path="/{companyCode}/stockPrice")
	public void addStockPriceToCompany(@PathVariable String companyCode, @RequestBody StockPrice stockPrice){
		Company company = companyService.addStockPriceToCompany(companyCode, stockPrice);
		if(company == null)
			throw new RuntimeException("Company Not Found for the Company Code "+companyCode);
	}
	
}
