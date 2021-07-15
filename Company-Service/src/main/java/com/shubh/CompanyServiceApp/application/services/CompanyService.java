package com.shubh.CompanyServiceApp.application.services;

import java.util.*;
import com.shubh.CompanyServiceApp.application.dto.*;

public interface CompanyService {
	public List<CompanyDTO> getCompanies();
	public CompanyDTO addCompany(CompanyDTO companyDto) ;
}
