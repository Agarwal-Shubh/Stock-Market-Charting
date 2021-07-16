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

import com.shubh.exchangeservice.application.dto.CompanyDTO;
import com.shubh.exchangeservice.application.dto.StockExchangeDTO;
import com.shubh.exchangeservice.application.services.ExchangeService;

@RestController
@RequestMapping("/exchanges")
public class ExchangeController 
{
	@Autowired
	private ExchangeService exchangeService;
	
	@GetMapping(path = "")
	public ResponseEntity<List<StockExchangeDTO>> getStockExchangesList() {
		return ResponseEntity.ok(exchangeService.getStockExchangesList());
	}
	
	@GetMapping(path = "/{id}")
	public ResponseEntity<StockExchangeDTO> getStockExchangeDetails(@PathVariable String id) throws Exception
	{
		StockExchangeDTO stockExchangeDto = exchangeService.findById(id);
		if(stockExchangeDto == null) {
			throw new Exception("Stock Exchange Not Found for id : " + id);
		}
		return ResponseEntity.ok(stockExchangeDto);
	}
	
	@PostMapping(path = "")
	public ResponseEntity<StockExchangeDTO> addStockExchange(@RequestBody StockExchangeDTO stockExchangeDto) {
		return ResponseEntity.ok(exchangeService.addStockExchange(stockExchangeDto));
	}
	
	@PutMapping(path = "")
	public ResponseEntity<StockExchangeDTO> editStockExchange(@RequestBody StockExchangeDTO stockExchangeDto)
			throws Exception 
	{
		StockExchangeDTO updatedStockExchangeDto = exchangeService.editStockExchange(stockExchangeDto);
		if(updatedStockExchangeDto == null) {
			throw new Exception("Stock Exchange Not Found for id : " + stockExchangeDto.getId());
		}
		return ResponseEntity.ok(updatedStockExchangeDto);
	}
	
}
	