package com.shubh.companyService.application.services.Impl;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;

import com.shubh.companyService.application.dao.*;
import com.shubh.companyService.application.dto.*;
import com.shubh.companyService.application.mapper.*;
import com.shubh.companyService.application.models.*;
import com.shubh.companyService.application.services.CompanyService;

import java.util.*;

@Service
public class CompanyServiceImpl implements CompanyService {
	@Autowired
	private CompanyRepository companyRepository;

	@Autowired
	private CompanyMapper companyMapper;

	@Autowired
	private IpoMapper ipoMapper;

	@Autowired
	private StockPriceMapper stockPriceMapper;
	
	@Override
	public List<CompanyDTO> getCompanies() 
	{
		List<Company> companies = companyRepository.findAll();
		if(companies.isEmpty())
			return null;
		else
			return companyMapper.mapToCompanyDTOs(companies);
	}
	
	@Override
	public CompanyDTO addCompany(CompanyDTO companyDto) 
	{
		Company company = companyMapper.mapToCompany(companyDto);
		company = companyRepository.save(company);
		companyDto = companyMapper.mapToCompanyDTO(company);
		return companyDto;
	}

}
