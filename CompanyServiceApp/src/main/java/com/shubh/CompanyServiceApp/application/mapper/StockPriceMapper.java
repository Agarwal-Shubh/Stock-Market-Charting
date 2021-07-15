package com.shubh.CompanyServiceApp.application.mapper;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.shubh.CompanyServiceApp.application.dto.*;
import com.shubh.CompanyServiceApp.application.models.*;

@Component
public class StockPriceMapper 
{
	public StockPriceDTO mapToStockPriceDTO(StockPrice stockPrice)
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		StockPriceDTO StockPriceDTO = mapper.map(stockPrice, StockPriceDTO.class);
		return StockPriceDTO;
	}
	
	public StockPrice mapToStockPrice(StockPriceDTO StockPriceDTO)
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		StockPrice stockPrice = mapper.map(StockPriceDTO, StockPrice.class);
		return stockPrice;
	}
	
	public List<StockPriceDTO> mapToStockPriceDTOs(List<StockPrice> stockPrices)
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<StockPriceDTO> StockPriceDTOs = Arrays.asList(mapper.map(stockPrices, StockPriceDTO[].class));
		return StockPriceDTOs;
	}
}