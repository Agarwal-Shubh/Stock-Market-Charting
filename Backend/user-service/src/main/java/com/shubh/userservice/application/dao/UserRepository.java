package com.shubh.userservice.application.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.shubh.userservice.application.models.User;

public interface UserRepository extends MongoRepository<User,String> {
	public User findByUsername(String username);
	public User findByUsernameOrEmail(String username, String email);
	public User findByConfirmationToken(String token);
}
