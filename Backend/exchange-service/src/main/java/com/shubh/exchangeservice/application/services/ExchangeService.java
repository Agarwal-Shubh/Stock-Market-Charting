package com.shubh.exchangeservice.application.services;

import java.util.List;

import com.shubh.exchangeservice.application.dto.CompanyDTO;
import com.shubh.exchangeservice.application.dto.StockExchangeDTO;

public interface ExchangeService {
	
	public List<StockExchangeDTO> getStockExchangesList();
	public StockExchangeDTO findById(String id);
	public StockExchangeDTO addStockExchange(StockExchangeDTO stockExchangeDTO);
	public StockExchangeDTO editStockExchange(StockExchangeDTO stockExchangeDTO);
	public void deleteStockExchange(String id);
	public List<CompanyDTO> getCompanies(String id);
	public StockExchangeDTO addCompanyToStockExchange(String stockExchangeName, CompanyDTO companyDTO);
}
