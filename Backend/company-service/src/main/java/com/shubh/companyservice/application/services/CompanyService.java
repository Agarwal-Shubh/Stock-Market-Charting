package com.shubh.companyservice.application.services;

import java.util.*;

import com.shubh.companyservice.application.dto.*;

public interface CompanyService {
	public List<CompanyDTO> getCompanies();
	public CompanyDTO addCompany(CompanyDTO companyDto) ;
}
