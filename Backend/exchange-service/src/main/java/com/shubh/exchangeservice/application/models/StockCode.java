package com.shubh.exchangeservice.application.models;

import java.util.UUID;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.*;
import org.springframework.data.mongodb.core.mapping.*;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="StockCode")
public class StockCode {
	@Id
	private UUID _id;
	
	@DBRef
	private StockExchange stockExchange;
	
	@DBRef
	private Company company;
}
