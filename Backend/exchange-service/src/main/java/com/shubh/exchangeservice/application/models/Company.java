package com.shubh.exchangeservice.application.models;

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
@Document(collection="Company")
public class Company {
	@Id
	private String id;

	private String name;
	private double turnover;
	private String ceo;
	private List<String> bod;
	private String description;
	
	@DBRef
	private Sector sector;
}
