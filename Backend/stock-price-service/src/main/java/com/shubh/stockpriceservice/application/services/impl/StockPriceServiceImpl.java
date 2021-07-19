package com.shubh.stockpriceservice.application.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.shubh.stockpriceservice.application.dao.StockPriceRepository;
import com.shubh.stockpriceservice.application.models.CompanyCompareRequest;
import com.shubh.stockpriceservice.application.models.SectorCompareRequest;
import com.shubh.stockpriceservice.application.models.StockPrice;
import com.shubh.stockpriceservice.application.services.StockPriceServices;

public class StockPriceServiceImpl implements StockPriceServices {

	@Autowired
	private StockPriceRepository stockPriceRepository;
	
	@Override
	public List<StockPrice> findAll() {
		return stockPriceRepository.findAll();
	}

	@Override
	public StockPrice findById(String id) {
		Optional<StockPrice> stockPrice = stockPriceRepository.findById(id);
		if(!stockPrice.isPresent())
			return null;
		return stockPrice.get();
	}

	@Override
	public void deleteById(String id) {
		stockPriceRepository.deleteById(id);
	}

	@Override
	public List<StockPrice> save(List<StockPrice> stockPrices) {
		return stockPriceRepository.saveAll(stockPrices);
	}

	@Override
	public StockPrice update(StockPrice stockPrice) {
		
		return null;
	}

	@Override
	public List<StockPrice> getStockPricesForCompanyComparison(CompanyCompareRequest compareRequest) throws Exception {
		
		return null;
	}

	@Override
	public List<StockPrice> getStockPricesForSectorComparison(SectorCompareRequest compareRequest) throws Exception {
		
		return null;
	}

}
