package com.shubh.exchangeservice.application.models;

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
	private ObjectId id;
	
	@DBRef
	private StockExchange stockExchange;
	
	@DBRef
	private Company company;
}
