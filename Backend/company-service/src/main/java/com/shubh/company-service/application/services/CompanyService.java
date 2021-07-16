package com.shubh.companyService.application.services;

import java.util.*;

import com.shubh.companyService.application.dto.*;

public interface CompanyService {
	public List<CompanyDTO> getCompanies();
	public CompanyDTO addCompany(CompanyDTO companyDto) ;
}
