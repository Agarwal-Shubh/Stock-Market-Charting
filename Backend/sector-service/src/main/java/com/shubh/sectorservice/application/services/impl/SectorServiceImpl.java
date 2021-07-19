package com.shubh.sectorservice.application.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shubh.sectorservice.application.dao.SectorRepository;
import com.shubh.sectorservice.application.models.Company;
import com.shubh.sectorservice.application.models.Sector;
import com.shubh.sectorservice.application.services.SectorService;

@Service
public class SectorServiceImpl implements SectorService{
	
	@Autowired
	private SectorRepository sectorRepository;
	
	@Override
	public Sector save(Sector sector) {
		sector = sectorRepository.save(sector);
		return sector;
	}

	@Override
	public List<Sector> findAll() {
		List<Sector> sectors = sectorRepository.findAll();
		return sectors;
	}

	@Override
	public Sector findById(String id) {
		Optional<Sector> sector = sectorRepository.findById(id);
		if(!sector.isPresent())
			return null;
		return sector.get();
	}

	@Override
	public void deleteById(String id) {
		sectorRepository.deleteById(id);		
	}

	@Override
	public List<Company> getCompanies(String id) {
		Optional<Sector> sector = sectorRepository.findById(id);
		if(!sector.isPresent())
			return null;
		return sector.get().getCompanies();
	}

	@Override
	public Sector addCompanyToSector(String sectorId, Company Company) {
		Optional<Sector> sector = sectorRepository.findById(sectorId);
		if(sector == null)
			return null;
		sector.get().getCompanies().add(Company);
		Sector Sector = sectorRepository.save(sector.get());
		return Sector;
	}

}
