package com.shubh.userservice.application.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SigninRequest
{
	private String username;
	private String password;
}
