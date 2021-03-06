package com.shubh.exchangeservice.application.controller;

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

import com.shubh.exchangeservice.application.models.Company;
import com.shubh.exchangeservice.application.models.StockExchange;
import com.shubh.exchangeservice.application.services.ExchangeService;

@RestController
@RequestMapping("/exchanges")
public class ExchangeController 
{
	@Autowired
	private ExchangeService exchangeService;
	
	@GetMapping(path = "")
	public ResponseEntity<List<StockExchange>> getStockExchangesList() {
		return ResponseEntity.ok(exchangeService.getStockExchangesList());
	}
	
	@GetMapping(path = "/{id}")
	public ResponseEntity<StockExchange> getStockExchangeDetails(@PathVariable String id)
	{
		StockExchange stockExchange = exchangeService.findById(id);
		if(stockExchange == null) {
			throw new RuntimeException("Stock Exchange Not Found for id : " + id);
		}
		return ResponseEntity.ok(stockExchange);
	}
	
	@PostMapping(path = "")
	public ResponseEntity<StockExchange> addStockExchange(@RequestBody StockExchange stockExchange) {
		return ResponseEntity.ok(exchangeService.addStockExchange(stockExchange));
	}
	
	@PutMapping(path = "")
	public ResponseEntity<StockExchange> editStockExchange(@RequestBody StockExchange stockExchange)
 
	{
		StockExchange updatedStockExchange = exchangeService.editStockExchange(stockExchange);
		if(updatedStockExchange == null) {
			throw new RuntimeException("Stock Exchange Not Found for id : " + stockExchange.getId());
		}
		return ResponseEntity.ok(updatedStockExchange);
	}
	@DeleteMapping(path="/{id}")
	public void deleteStockExchange(@PathVariable String id){
			exchangeService.deleteStockExchange(id);
	}
	
	@GetMapping(path="/{id}/companies")
	public ResponseEntity<List<Company>> getCompanies(@PathVariable String id){
		List<Company> companies = exchangeService.getCompanies(id);
		if(companies==null)
			throw new RuntimeException("Stock Exchange Not Found for Id "+id);
		return ResponseEntity.ok(companies);
	}
	
	@PostMapping(path="/{exchangeName}/addCompany")
	public ResponseEntity<StockExchange> addCompanyToExchange(@PathVariable String exchangeName, @RequestBody Company company){
		StockExchange stockExchange = exchangeService.addCompanyToStockExchange(exchangeName, company);
		if(stockExchange==null) {
			throw new RuntimeException("Stock Exchange not found for : "+exchangeName);
		}
		
		return ResponseEntity.ok(stockExchange);
	}
	
}
	