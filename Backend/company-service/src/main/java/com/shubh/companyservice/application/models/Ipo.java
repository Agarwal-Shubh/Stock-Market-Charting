package com.shubh.companyservice.application.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="Ipo")
public class Ipo 
{
	@Id
	private String id;
	private String companyName;
	private String stockExchangeName;
	private double pricePerShare;
	private int shares;
	private Date openDateTime;
	private String remarks;
}
