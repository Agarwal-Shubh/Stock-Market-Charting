package com.shubh.exchangeservice.application.dto;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.*;
import org.springframework.data.mongodb.core.mapping.*;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StockExchangeDTO {
	
	private UUID _id;
	private String Name;
	
	private String brief;
	
	private String remarks;

	public String getId() {
		return _id.toString();
	}	
}
