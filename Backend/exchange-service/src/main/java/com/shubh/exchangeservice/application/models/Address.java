package com.shubh.exchangeservice.application.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="Address")
public class Address {
	@Id
	private String id;
	
	private String buildingno;
	
	private String locality;
	
	private String city;
	
	private String state;
	
	private String country;
	
	private int pincode;
}
