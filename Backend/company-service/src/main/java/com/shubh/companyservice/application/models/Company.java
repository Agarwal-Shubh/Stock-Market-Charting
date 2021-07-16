package com.shubh.companyservice.application.models;

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
@Document(collection="Company")
public class Company 
{
	@Id
	private String id;
	private String name;
	private String turnover;
	private String ceo;
	private List<String> boardOfDirectors;
	private String sectorId;
	private String description;

}