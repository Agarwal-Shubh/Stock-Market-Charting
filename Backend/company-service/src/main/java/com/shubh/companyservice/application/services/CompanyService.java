package com.shubh.companyservice.application.services;

import java.util.List;

import com.shubh.companyservice.application.models.Company;
import com.shubh.companyservice.application.models.Ipo;
import com.shubh.companyservice.application.models.StockPrice;

public interface CompanyService {
	public List<Company> getCompanies();
	public Company findById(String id);
	public List<Company> getMatchingCompanies(String pattern);
	public Company addCompany(Company Company);
	public Company editCompany(Company Company);
	public void deleteCompany(String id);
	public Company addIpoToCompany(String companyName, Ipo Ipo);
	public List<Ipo> getCompanyIpoDetails(String id);
	public Company addStockPriceToCompany(String companyCode, StockPrice stockPrice);
	public List<StockPrice> getStockPrices(String companyName);
}
