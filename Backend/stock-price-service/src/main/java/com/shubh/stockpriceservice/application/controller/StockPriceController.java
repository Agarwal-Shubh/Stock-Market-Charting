package com.shubh.stockpriceservice.application.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shubh.stockpriceservice.application.models.CompanyCompareRequest;
import com.shubh.stockpriceservice.application.models.SectorCompareRequest;
import com.shubh.stockpriceservice.application.models.StockPrice;
import com.shubh.stockpriceservice.application.services.StockPriceServices;

@RestController
@RequestMapping("/stockPrice")
public class StockPriceController {
	@Autowired
	private StockPriceServices stockPriceService;
	
	@GetMapping(path = "")
	public ResponseEntity<List<StockPrice>> findAll() {
		return ResponseEntity.ok(stockPriceService.findAll());
	}
	
	@GetMapping(path = "/{id}")
	public ResponseEntity<StockPrice> findById(@PathVariable String id) 
	{
		StockPrice stockPrice = stockPriceService.findById(id);
		if(stockPrice == null) {
			throw new RuntimeException("Stock Price Not Found with id : " + id);
		}
		return ResponseEntity.ok(stockPrice);
	}
	
	@GetMapping(path = "/compareCompany")
	public ResponseEntity<?> companyComparison(@RequestBody CompanyCompareRequest compareRequest)
	{
		List<StockPrice> stockPrices = null;
		try {
			stockPrices = stockPriceService.getStockPricesForCompanyComparison(compareRequest);
		} catch (ParseException e) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Invalid Date Format");
		}
		return ResponseEntity.ok(stockPrices);
	}
	
	@GetMapping(path = "/compareSector")
	public ResponseEntity<?> sectorComparison(@RequestBody SectorCompareRequest compareRequest)
	{
		List<StockPrice> stockPrices = null;
		try {
			stockPrices = stockPriceService.getStockPricesForSectorComparison(compareRequest);
		} catch (ParseException e) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Invalid Date Format");
		}
		return ResponseEntity.ok(stockPrices);
	}
	
	
	@PostMapping(path = "")
	public ResponseEntity<?> save(@RequestBody List<StockPrice> stockPrices) {
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(stockPriceService.save(stockPrices));
	}
	
	@PutMapping(path = "")
	public ResponseEntity<StockPrice> update(@RequestBody StockPrice stockPrice)
	{ 
		StockPrice updatedStockPrice = stockPriceService.update(stockPrice);
		if(updatedStockPrice == null) {
			throw new RuntimeException("Stock Price not found with id : " + stockPrice.getId());
		}
		return ResponseEntity.ok(updatedStockPrice);
	}
	
	@DeleteMapping(path = "/{id}")
	public void deleteById(@PathVariable String id) {
		stockPriceService.deleteById(id);
	}
}
