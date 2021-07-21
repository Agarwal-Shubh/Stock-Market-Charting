package com.shubh.userservice.application.initializer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.shubh.userservice.application.dao.UserRepository;
import com.shubh.userservice.application.models.User;

@Component
public class UserServiceApplicationInitializer implements CommandLineRunner
{
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public void run(String... args) throws Exception 
	{
		userRepository.deleteAll();
		User admin = new User("admin", passwordEncoder.encode("password"), "shubh.agarwal2652@gmail.com", "9027116321");
		admin.setRole("ADMIN");
		admin.setConfirmed(true);
		userRepository.save(admin);
	}
}
