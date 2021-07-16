package com.shubh.exchangeservice.application.models;

import java.util.ArrayList;
import java.util.List;

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
	
	private String brief;
	
	private String remarks;
	
	@DBRef
	private List<Address> address = new ArrayList<>();
	
}
