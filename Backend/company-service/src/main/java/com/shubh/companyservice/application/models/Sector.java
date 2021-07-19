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
@Document(collection="Sector")
public class Sector {
	@Id
	private String id;
	
	private String name;
	
	private String brief;
	
	@DBRef
	private List<Company> companies = new ArrayList<>();
}
