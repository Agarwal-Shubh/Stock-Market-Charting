package com.shubh.userservice.application.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.shubh.userservice.application.models.User;



public interface UserService extends UserDetailsService
{
	public UserDetails loadUserByUsername(String username);
	public User signup(User user);
	public User activate(String token);
	public User update(User user);
}
