package com.shubh.exchangeservice.application.models;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.*;
import org.springframework.data.mongodb.core.mapping.*;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="Sector")
public class Sector {
	@Id
	private ObjectId id;
	
	private String name;
	
	private String brief;
}
