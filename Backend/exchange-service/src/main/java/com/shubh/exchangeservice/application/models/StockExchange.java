package com.shubh.exchangeservice.application.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="StockExchange")
public class StockExchange {
	@Id
	private String id;
	
	private String name;
	
	private String brief;
	
	private String remarks;
	
	@DBRef
	private List<Company> companies = new ArrayList<>();
	
	@DBRef
	private List<Address> address = new ArrayList<>();
	
	public String getId() {
		return this.id;
	}

	public List<Company> getCompanies() {
		return this.companies;
	}
	
	public void StockExchange(String name,String brief,String remarks) {
		this.name=name;
		this.brief=brief;
		this.remarks=remarks;
	}
	
	
}
