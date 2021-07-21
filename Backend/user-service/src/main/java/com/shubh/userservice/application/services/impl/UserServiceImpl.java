package com.shubh.userservice.application.services.impl;

import java.util.Arrays;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.shubh.userservice.application.dao.UserRepository;
import com.shubh.userservice.application.models.User;
import com.shubh.userservice.application.services.UserService;


@Service
public class UserServiceImpl implements UserService
{
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException 
	{
		User user = userRepository.findByUsername(username);
		if(user == null || !user.isConfirmed())
			return null;
		return new org.springframework.security.core.userdetails.User(
				user.getUsername(),
				user.getPassword(),
				Arrays.asList(new SimpleGrantedAuthority(user.getRole())));
	}
	
	@Override
	public User signup(User user)  
	{
		if(userRepository.findByUsernameOrEmail(user.getUsername(), user.getEmail())!=null)
			return null;
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setRole("USER");
		user.setConfirmationToken(UUID.randomUUID().toString());
		user.setConfirmed(false);
		user = userRepository.save(user);		
		return user;
	}
	
	@Override
	public User activate(String token)
	{
		User user = userRepository.findByConfirmationToken(token);
		if(user == null)
			return null;
		user.setConfirmed(true);
		user.setConfirmationToken(null);
		user = userRepository.save(user);
		return user;
	}
	
	@Override
	public User update(User user) 
	{
		if(!userRepository.findById(user.getId()).isPresent())
			return null;
		user = userRepository.save(user);
		return user;
	}

}
