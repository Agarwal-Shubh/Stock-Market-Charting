package com.shubh.companyService.application.dto;

import java.util.List;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDTO 
{
	private String id;
	private String name;
	private String turnover;
	private String ceo;
	private List<String> boardOfDirectors;
	private String sectorId;
	private String description;
}
