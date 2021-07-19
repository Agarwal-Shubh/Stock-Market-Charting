package com.shubh.companyservice.application.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="StockPrice")
public class StockPrice 
{
	@Id
	private String id;
	@DBRef
	private Company company;
	private String stockExchangeName;
	private double price;
	private String date;
	private String time;
}
