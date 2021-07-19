package com.shubh.companyservice.application.models;

import org.springframework.data.annotation.Id;
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
}
