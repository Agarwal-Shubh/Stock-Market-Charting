package com.shubh.sectorservice.application.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.mongodb.lang.NonNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Sector 
{
	@Id
	private String id;
	
	@NonNull
	private String name;
	
	@NonNull
	private String brief;
	
	@DBRef
	private List<Company> companies = new ArrayList<>();
}