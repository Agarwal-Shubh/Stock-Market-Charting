package com.shubh.exchangeservice.application.services;

import java.util.List;

import com.shubh.exchangeservice.application.models.Company;
import com.shubh.exchangeservice.application.models.StockExchange;

public interface ExchangeService {
	
	public List<StockExchange> getStockExchangesList();
	public StockExchange findById(String id);
	public StockExchange addStockExchange(StockExchange StockExchange);
	public StockExchange editStockExchange(StockExchange StockExchange);
	public void deleteStockExchange(String id);
	public List<Company> getCompanies(String id);
	public StockExchange addCompanyToStockExchange(String stockExchangeName, Company company);
}
