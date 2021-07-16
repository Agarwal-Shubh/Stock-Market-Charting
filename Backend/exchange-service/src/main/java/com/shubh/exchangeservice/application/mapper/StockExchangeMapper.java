package com.shubh.exchangeservice.application.mapper;

import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.shubh.exchangeservice.application.dto.StockExchangeDTO;
import com.shubh.exchangeservice.application.models.StockExchange;

@Component
public class StockExchangeMapper {

	public StockExchangeDTO toStockExchangeDto(StockExchange stockExchange)
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		StockExchangeDTO stockExchangeDto = mapper.map(stockExchange, StockExchangeDTO.class);
		return stockExchangeDto;
	}
	
	public StockExchange toStockExchange(StockExchangeDTO stockExchangeDto)
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		StockExchange stockExchange = mapper.map(stockExchangeDto, StockExchange.class);
		return stockExchange;
	}
	
	public List<StockExchangeDTO> toStockExchangeDtos(List<StockExchange> stockExchanges)
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<StockExchangeDTO> stockExchangeDtos = Arrays.asList(mapper.map(stockExchanges, StockExchangeDTO[].class));
		return stockExchangeDtos;
	}
}
