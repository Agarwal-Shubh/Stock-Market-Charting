package com.shubh.CompanyServiceApp.application.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StockPriceDTO 
{
	private String id;
	private String companyCode;
	private String stockExchangeName;
	private double price;
	private String date;
	private String time;
}
