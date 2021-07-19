package com.shubh.companyservice.application.services.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shubh.companyservice.application.dao.IpoRepository;
import com.shubh.companyservice.application.models.Company;
import com.shubh.companyservice.application.models.Ipo;
import com.shubh.companyservice.application.services.CompanyService;
import com.shubh.companyservice.application.services.IpoService;

@Service
public class IpoServiceImpl implements IpoService {

	@Autowired
	private IpoRepository ipoRepository;
	
	@Autowired
	private CompanyService companyService;
	
	@Override
	public List<Ipo> findAll() {
		
	return ipoRepository.findAll();	
	
	}

	@Override
	public Ipo findById(String id) {
		Optional<Ipo> ipo = ipoRepository.findById(id);
		if(!ipo.isPresent())
			return null;
		return ipo.get();
	}

	@Override
	public Ipo save(Ipo Ipo) {
		Ipo ipo = ipoRepository.save(Ipo);
		Company company = companyService.addIpoToCompany(ipo.getCompanyName(), ipo);
		if(company==null)
			return null;
		return ipo;
	}

	@Override
	public Ipo update(Ipo Ipo) {
		return ipoRepository.save(Ipo);
	}

	@Override
	public void deleteById(String id) {
		ipoRepository.deleteById(id);
	}

}
