package com.shubh.companyService.application.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class IpoDTO 
{
	private String id;
	private String companyName;
	private String stockExchangeName;
	private double price;
	private int shares;
	private String openDateTime;
	private String remarks;
}
