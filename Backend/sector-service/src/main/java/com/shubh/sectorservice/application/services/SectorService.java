package com.shubh.sectorservice.application.services;

import java.util.List;

import com.shubh.sectorservice.application.models.Company;
import com.shubh.sectorservice.application.models.Sector;

public interface SectorService {
	public Sector save(Sector Sector);
	public List<Sector> findAll() ;
	public Sector findById(String id);
	public void deleteById(String id);
	public List<Company> getCompanies(String id);
	public Sector addCompanyToSector(String sectorName, Company Company);
}
