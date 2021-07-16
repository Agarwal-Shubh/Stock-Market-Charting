package com.shubh.exchangeService.application.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.*;
import org.springframework.data.mongodb.core.mapping.*;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="StockExchange")
public class StockExchange {
	@Id
	private ObjectId id;
	
	private String Name;

}
