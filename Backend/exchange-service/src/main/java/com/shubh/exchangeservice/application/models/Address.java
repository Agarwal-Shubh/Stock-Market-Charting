package com.shubh.exchangeservice.application.models;
import java.util.UUID;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.*;
import org.springframework.data.mongodb.core.mapping.*;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="Address")
public class Address {
	@Id
	private UUID _id;
	
	private String buildingno;
	
	private String locality;
	
	private String city;
	
	private String state;
	
	private String country;
	
	private int pincode;
}