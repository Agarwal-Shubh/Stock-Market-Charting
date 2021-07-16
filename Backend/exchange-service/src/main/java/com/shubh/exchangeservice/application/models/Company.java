package com.shubh.exchangeservice.application.models;

import java.util.List;
import java.util.UUID;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.*;
import org.springframework.data.mongodb.core.mapping.*;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="Company")
public class Company {
	@Id
	private UUID _id;

	private String name;
	private double turnover;
	private String ceo;
	private List<String> bod;
	private String description;
	
	@DBRef
	private Sector sector;
}
