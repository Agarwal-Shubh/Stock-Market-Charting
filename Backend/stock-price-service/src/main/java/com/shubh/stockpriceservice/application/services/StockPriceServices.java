package com.shubh.stockpriceservice.application.services;

import java.text.ParseException;
import java.util.List;

import com.shubh.stockpriceservice.application.models.CompanyCompareRequest;
import com.shubh.stockpriceservice.application.models.SectorCompareRequest;
import com.shubh.stockpriceservice.application.models.StockPrice;

public interface StockPriceServices {
	public List<StockPrice> findAll();
	public StockPrice findById(String id);
	public void deleteById(String id);
	public List<StockPrice> save(List<StockPrice> stockPrices);
	public StockPrice update(StockPrice stockPrice);
	public List<StockPrice> getStockPricesForCompanyComparison(CompanyCompareRequest compareRequest)throws ParseException;
	public List<StockPrice> getStockPricesForSectorComparison(SectorCompareRequest compareRequest)throws ParseException;
}
