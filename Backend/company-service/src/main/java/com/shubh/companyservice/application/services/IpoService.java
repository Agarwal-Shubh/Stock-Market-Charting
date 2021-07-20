package com.shubh.companyservice.application.services;

import java.util.List;

import com.shubh.companyservice.application.models.Ipo;

public interface IpoService {
	public List<Ipo> findAll();
	public Ipo findById(String id);
	public Ipo save(Ipo Ipo);
	public Ipo update(Ipo Ipo);
	public void deleteById(String id);
}
