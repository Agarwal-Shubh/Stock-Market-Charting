package com.shubh.exchangeservice.application.initializer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.shubh.exchangeservice.application.dao.StockExchangeRepository;
import com.shubh.exchangeservice.application.models.StockExchange;

@Component
public class StockExchangeInitializer implements CommandLineRunner
{
	@Autowired
	private StockExchangeRepository stockExchangeRepository;
	
	@Override
	public void run(String... args) throws Exception 
	{
		
	}

}
