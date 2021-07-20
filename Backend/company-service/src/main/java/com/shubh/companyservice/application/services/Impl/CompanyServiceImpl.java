package com.shubh.companyservice.application.services.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shubh.companyservice.application.dao.CompanyRepository;
import com.shubh.companyservice.application.feignclient.ExchangeClient;
import com.shubh.companyservice.application.feignclient.SectorClient;
import com.shubh.companyservice.application.models.Company;
import com.shubh.companyservice.application.models.Ipo;
import com.shubh.companyservice.application.models.StockPrice;
import com.shubh.companyservice.application.services.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService {
	@Autowired
	private CompanyRepository companyRepository;
	
	@Autowired
	private SectorClient sectorClient;
	
	@Autowired
	private ExchangeClient exchangeClient;

	
	@Override
	public List<Company> getCompanies() 
	{
		List<Company> companies = companyRepository.findAll();
		if(companies.isEmpty())
			return null;
		else
			return companies;
	}
	
	@Override
	public Company addCompany(Company Company) 
	{
		Company = companyRepository.save(Company);

		sectorClient.addCompanyToSector(Company.getSectorName(), Company);
		List<String> stockExchangeNames = Company.getExchangeNames();
		for(String exchange: stockExchangeNames) {
			exchangeClient.addCompanyToStockExchange(exchange, Company);
		}
		return Company;
	}

	@Override
	public Company findById(String id) {
		Optional<Company> company = companyRepository.findById(id);
		if(!company.isPresent())
			return null;
		return company.get();
	}

	@Override
	public List<Company> getMatchingCompanies(String pattern) {
		List<Company> companies = companyRepository.findByNameIgnoreCaseContaining(pattern);
		return companies;
	}

	@Override
	public Company editCompany(Company Company) {
		Company = companyRepository.save(Company);
		return Company;
	}

	@Override
	public void deleteCompany(String id) {
		companyRepository.deleteById(id);
	}

	@Override
	public Company addIpoToCompany(String companyName, Ipo Ipo) {
		Company company = companyRepository.findByName(companyName);
		if(company==null)
			return null;
		company.getIpos().add(Ipo);
		company = companyRepository.save(company);
		
		return company;
	}

	@Override
	public List<Ipo> getCompanyIpoDetails(String id) {
		Optional<Company> company = companyRepository.findById(id);
		if(!company.isPresent())
			return null;
		return company.get().getIpos();		
	}

	@Override
	public Company addStockPriceToCompany(String companyCode, StockPrice stockPrice) {
		Company company = companyRepository.findByCode(companyCode);
		if(company==null)
			return null;
		company.getStockPrices().add(stockPrice);
		company = companyRepository.save(company);
		
		return company;
	}

	@Override
	public List<StockPrice> getStockPrices(String id) {
		Optional<Company> company = companyRepository.findById(id);
		if(!company.isPresent())
			return null;
		return company.get().getStockPrices();	
	}

}
