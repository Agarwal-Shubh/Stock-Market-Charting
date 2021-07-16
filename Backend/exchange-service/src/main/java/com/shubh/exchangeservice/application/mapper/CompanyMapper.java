package com.shubh.exchangeservice.application.mapper;

import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.shubh.exchangeservice.application.dto.CompanyDTO;
import com.shubh.exchangeservice.application.models.Company;

@Component
public class CompanyMapper 
{
	public CompanyDTO mapToCompanyDTO(Company company) 
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		CompanyDTO CompanyDTO = mapper.map(company, CompanyDTO.class);
		return CompanyDTO;
	}
	
	public Company mapToCompany(CompanyDTO CompanyDTO) 
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Company company = mapper.map(CompanyDTO, Company.class);
		return company;
	}
	
	public List<CompanyDTO> mapToCompanyDTOs(List<Company> companies)
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<CompanyDTO> CompanyDTOs = Arrays.asList(mapper.map(companies, CompanyDTO[].class));
		return CompanyDTOs;
	}
}
