package com.shubh.exchangeservice.application.services.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shubh.exchangeservice.application.dao.StockExchangeRepository;
import com.shubh.exchangeservice.application.dto.CompanyDTO;
import com.shubh.exchangeservice.application.dto.StockExchangeDTO;
import com.shubh.exchangeservice.application.mapper.CompanyMapper;
import com.shubh.exchangeservice.application.mapper.StockExchangeMapper;
import com.shubh.exchangeservice.application.models.StockExchange;
import com.shubh.exchangeservice.application.services.ExchangeService;


@Service
public class ExchangeServiceImpl implements ExchangeService{

	@Autowired
	private StockExchangeRepository stockExchangeRepository;
	
	@Autowired
	private StockExchangeMapper stockExchangeMapper;
	
	@Autowired
	private CompanyMapper companyMapper;
	
	@Override
	public List<StockExchangeDTO> getStockExchangesList() 
	{
		List<StockExchange> stockExchanges = stockExchangeRepository.findAll();
		return stockExchangeMapper.toStockExchangeDtos(stockExchanges);
	}
	
	@Override
	public StockExchangeDTO findById(String id) 
	{
		Optional<StockExchange> stockExchange = stockExchangeRepository.findById(id);
		if(!stockExchange.isPresent())
			return null;
		return stockExchangeMapper.toStockExchangeDto(stockExchange.get());
	}
	
	@Override
	public StockExchangeDTO addStockExchange(StockExchangeDTO stockExchangeDTO) 
	{
		StockExchange stockExchange = stockExchangeMapper.toStockExchange(stockExchangeDTO);
		stockExchange = stockExchangeRepository.save(stockExchange);
		return stockExchangeMapper.toStockExchangeDto(stockExchange);
	}

	@Override
	public StockExchangeDTO editStockExchange(StockExchangeDTO stockExchangeDTO) 
	{
		if(findById(stockExchangeDTO.getId()) == null)
			return null;
		StockExchange stockExchange = stockExchangeMapper.toStockExchange(stockExchangeDTO);
		stockExchange = stockExchangeRepository.save(stockExchange);
		return stockExchangeMapper.toStockExchangeDto(stockExchange);
	}

	@Override
	public void deleteStockExchange(String id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<CompanyDTO> getCompanies(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public StockExchangeDTO addCompanyToStockExchange(String stockExchangeName, CompanyDTO companyDTO) {
		// TODO Auto-generated method stub
		return null;
	}
}
