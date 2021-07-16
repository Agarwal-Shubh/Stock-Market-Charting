package com.shubh.exchangeservice.application.dto;

import java.util.List;
import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.shubh.exchangeservice.application.models.Sector;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDTO {
	
	private UUID _id;
	private String name;
	private double turnover;
	private String ceo;
	private List<String> bod;
	private String description;
}