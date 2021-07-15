package com.shubh.CompanyServiceApp.application.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shubh.CompanyServiceApp.application.models.*;

@Repository
public interface CompanyRepository extends MongoRepository<Company, String>
{
	public Optional<Company> findById(String id);
	public List<Company> findByNameIgnoreCaseContaining(String pattern);
	public Company findByName(String name);
	public Company findByCode(String code);
}
