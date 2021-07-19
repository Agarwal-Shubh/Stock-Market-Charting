package com.shubh.companyservice.application.services.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shubh.companyservice.application.dao.CompanyRepository;
import com.shubh.companyservice.application.models.Company;
import com.shubh.companyservice.application.models.Ipo;
import com.shubh.companyservice.application.models.StockPrice;
import com.shubh.companyservice.application.services.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService {
	@Autowired
	private CompanyRepository companyRepository;


	
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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteCompany(String id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Company addIpoToCompany(String companyName, Ipo Ipo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Ipo> getCompanyIpoDetails(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Company addStockPriceToCompany(String companyCode, StockPrice stockPrice) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<StockPrice> getStockPrices(String companyName) {
		// TODO Auto-generated method stub
		return null;
	}

}
