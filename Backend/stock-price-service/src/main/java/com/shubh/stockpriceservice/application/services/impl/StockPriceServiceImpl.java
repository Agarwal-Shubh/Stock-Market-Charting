package com.shubh.stockpriceservice.application.services.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shubh.stockpriceservice.application.dao.StockPriceRepository;
import com.shubh.stockpriceservice.application.feignclient.CompanyClient;
import com.shubh.stockpriceservice.application.feignclient.SectorClient;
import com.shubh.stockpriceservice.application.models.Company;
import com.shubh.stockpriceservice.application.models.CompanyCompareRequest;
import com.shubh.stockpriceservice.application.models.SectorCompareRequest;
import com.shubh.stockpriceservice.application.models.StockPrice;
import com.shubh.stockpriceservice.application.services.StockPriceServices;


@Service
public class StockPriceServiceImpl implements StockPriceServices {

	@Autowired
	private StockPriceRepository stockPriceRepository;
	
	@Autowired
	private SectorClient sectorClient;
	
	@Autowired
	private CompanyClient companyClient;
	
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
		stockPrices = stockPriceRepository.saveAll(stockPrices);
		for(StockPrice stock : stockPrices) {
			companyClient.addStockPriceToCompany(stock.getCompanyCode(), stock);
		}
		return stockPrices;
	}

	@Override
	public StockPrice update(StockPrice stockPrice) {
	Optional<StockPrice> stockprice = stockPriceRepository.findById(stockPrice.getId());
	if(stockprice==null)
		return null;
	return stockPriceRepository.save(stockPrice);
	}

	@Override
	public List<StockPrice> getStockPricesForCompanyComparison(CompanyCompareRequest compareRequest) throws ParseException {
		Date fromDate = new SimpleDateFormat("dd-MM-yyyy").parse(compareRequest.getFromPeriod());
		Date toDate = new SimpleDateFormat("dd-MM-yyyy").parse(compareRequest.getToPeriod());
		List<StockPrice> stockPrices = stockPriceRepository.findByCompanyCodeAndStockExchangeName(compareRequest.getCompanyCode(), compareRequest.getStockExchangeName());
		List<StockPrice> finalList = stockPrices.stream().filter(stockPrice -> {
					Date date = null;
					try {
						date = new SimpleDateFormat("dd-MM-yyyy").parse(stockPrice.getDate());
					} catch (ParseException e) {
						e.printStackTrace();
					}
					return date.after(fromDate) && date.before(toDate);
				})
				.collect(Collectors.toList());
					return finalList;
	}

	@Override
	public List<StockPrice> getStockPricesForSectorComparison(SectorCompareRequest compareRequest) throws ParseException {
		Date fromDate = new SimpleDateFormat("dd-MM-yyyy").parse(compareRequest.getFromPeriod());
		Date toDate = new SimpleDateFormat("dd-MM-yyyy").parse(compareRequest.getToPeriod());
		List<StockPrice> stockPricesForSector = new ArrayList<>();
		for(Company company: sectorClient.getSectorCompanies(compareRequest.getSectorName()))
		{
			List<StockPrice> stockPrices = stockPriceRepository
					.findByCompanyCodeAndStockExchangeName(company.getCode(), compareRequest.getStockExchangeName());
			List<StockPrice> finalList = stockPrices.stream()
					.filter(stockPrice -> {
						Date date = null;
							try {
								date = new SimpleDateFormat("dd-MM-yyyy").parse(stockPrice.getDate());
							} catch (ParseException e) {
								e.printStackTrace();
							}
						
						return date.after(fromDate) && date.before(toDate);
					})
					.collect(Collectors.toList());
			stockPricesForSector.addAll(finalList);
		}
		return stockPricesForSector;
	}

}
