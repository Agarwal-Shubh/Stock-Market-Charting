package com.shubh.sectorservice.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shubh.sectorservice.application.models.Company;
import com.shubh.sectorservice.application.models.Sector;
import com.shubh.sectorservice.application.services.SectorService;

@RestController
@RequestMapping("/sectors")
public class SectorController {

	@Autowired
	private SectorService sectorService;
	
	@GetMapping(path="")
	public ResponseEntity<List<Sector>> getSectors(){
		return ResponseEntity.ok(sectorService.findAll());
	}
	
	@GetMapping(path="/{id}")
	public ResponseEntity<Sector> getSectorById(@PathVariable String id){
		Sector sector = sectorService.findById(id);
		if(sector == null) {
			throw new RuntimeException("Sector not found for id : " + id);
		}
		return ResponseEntity.ok(sector);
	}
	
	@PostMapping(path = "")
	public ResponseEntity<Sector> addSector(@RequestBody Sector sector) {
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(sectorService.save(sector));
	}
	
	@PutMapping(path = "")
	public ResponseEntity<Sector> updateSector(@RequestBody Sector Sector)
	{
		Sector updatedSector = sectorService.save(Sector);
		if(updatedSector == null) {
			throw new RuntimeException("Sector not found for id : " + Sector.getId());
		}
		return ResponseEntity.ok(updatedSector);
	}
	
	@DeleteMapping(path = "/{id}")
	public void deleteById(@PathVariable String id) {
		sectorService.deleteById(id);
	}
	
	@GetMapping(path = "/{id}/companies")
	public ResponseEntity<List<Company>> getCompanies(@PathVariable String id)
	{
		List<Company> companies = sectorService.getCompanies(id);
		if(companies == null) {
			throw new RuntimeException("Sector not found for id : " + id);
		}
		return ResponseEntity.ok(companies);
	}
	

	@PostMapping(path = "/{sectorName}/companies")
	public void addCompanyToSector(@PathVariable String sectorName, @RequestBody Company company)
	{
		Sector Sector = sectorService.addCompanyToSector(sectorName, company);
		if(Sector == null) {
			throw new RuntimeException("Sector not found with name : " + sectorName);
		}
	}	
	
}
