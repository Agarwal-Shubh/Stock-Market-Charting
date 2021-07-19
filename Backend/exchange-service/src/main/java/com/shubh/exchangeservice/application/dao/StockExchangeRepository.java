package com.shubh.exchangeservice.application.dao;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shubh.exchangeservice.application.models.StockExchange;


@Repository
public interface StockExchangeRepository extends MongoRepository<StockExchange, String>
{
	public Optional<StockExchange> findById(String id);
	public StockExchange findByName(String Name);
}