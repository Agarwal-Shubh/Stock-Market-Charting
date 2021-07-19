package com.shubh.exchangeservice.application.services.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shubh.exchangeservice.application.dao.CompanyRepository;
import com.shubh.exchangeservice.application.dao.StockExchangeRepository;
import com.shubh.exchangeservice.application.models.Company;
import com.shubh.exchangeservice.application.models.StockExchange;
import com.shubh.exchangeservice.application.services.ExchangeService;


@Service
public class ExchangeServiceImpl implements ExchangeService{

	@Autowired
	private StockExchangeRepository stockExchangeRepository;
	
	@Autowired
	private CompanyRepository companyRepository;
	
	@Override
	public List<StockExchange> getStockExchangesList() 
	{
		List<StockExchange> stockExchanges = stockExchangeRepository.findAll();
		return stockExchanges;
	}
	
	@Override
	public StockExchange findById(String id) 
	{
		Optional<StockExchange> stockExchange = stockExchangeRepository.findById(id);
		if(!stockExchange.isPresent())
			return null;
		return stockExchange.orElse(null);
	}
	
	@Override
	public StockExchange addStockExchange(StockExchange stockExchange) 
	{
		stockExchange = stockExchangeRepository.save(stockExchange);
		return stockExchange;
	}
	@Override
	public StockExchange editStockExchange(StockExchange stockExchange) 
	{
		if(findById(stockExchange.getId()) == null)
			return null;
		stockExchange = stockExchangeRepository.save(stockExchange);
		return stockExchange;
	}

	@Override
	public void deleteStockExchange(String id) {
		stockExchangeRepository.deleteById(id);
	}

	@Override
	public List<Company> getCompanies(String id) {
		Optional<StockExchange> stockExchange = stockExchangeRepository.findById(id);
		if(!stockExchange.isPresent())
			return null;
		return stockExchange.get().getCompanies();
			}

	@Override
	public StockExchange addCompanyToStockExchange(String exchangeName, Company company) {
		StockExchange stockExchange = stockExchangeRepository.findByName(exchangeName);
		if(stockExchange == null)
			return null;
		stockExchange.getCompanies().add(company);
		StockExchange stockExchangeUpdated = stockExchangeRepository.save(stockExchange);
		return stockExchangeUpdated;
	}

}
