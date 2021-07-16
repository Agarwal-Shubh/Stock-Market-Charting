package com.shubh.companyservice.application.dao;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shubh.companyservice.application.models.*;

@Repository
public interface IpoRepository extends MongoRepository<Ipo, String>
{
	public Optional<Ipo> findById(String id);
	public void deleteById(String id);
}