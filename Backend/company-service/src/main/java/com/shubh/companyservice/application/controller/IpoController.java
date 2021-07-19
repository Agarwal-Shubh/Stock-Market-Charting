package com.shubh.companyservice.application.controller;

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

import com.shubh.companyservice.application.models.Ipo;
import com.shubh.companyservice.application.services.IpoService;


@RestController
@RequestMapping("/ipo")
public class IpoController {
	@Autowired
	private IpoService ipoService;
	
	@GetMapping(path = "")
	public ResponseEntity<List<Ipo>> findAll() {
		return ResponseEntity.ok(ipoService.findAll());
	}
	
	@GetMapping(path = "/{id}")
	public ResponseEntity<Ipo> findById(@PathVariable String id)throws Exception
	{
		Ipo Ipo = ipoService.findById(id);
		if(Ipo == null) {
			throw new Exception("Ipo not found for id : " + id);
		}
		return ResponseEntity.ok(Ipo);
	}
	
	@PostMapping(path = "")
	public ResponseEntity<Ipo> save(@RequestBody Ipo Ipo)throws Exception
	{
		Ipo addedIpo = ipoService.save(Ipo);
		if(addedIpo == null) {
			throw new Exception("Company not found with name : " + Ipo.getCompanyName());
		}
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(addedIpo);
	}
	
	@PutMapping(path = "")
	public ResponseEntity<Ipo> update(@RequestBody Ipo Ipo)
			throws Exception
	{
		Ipo updatedIpo = ipoService.update(Ipo);
		if(updatedIpo == null) {
			throw new Exception("Ipo not found for id : " + Ipo.getId());
		}
		return ResponseEntity.ok(updatedIpo);
	}
	
	@DeleteMapping(path = "/{id}")
	public void deleteById(@PathVariable String id) {
		ipoService.deleteById(id);
	}
}
