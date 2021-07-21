package com.shubh.userservice.application.controller;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shubh.userservice.application.config.JwtTokenUtil;
import com.shubh.userservice.application.models.Mail;
import com.shubh.userservice.application.models.SigninRequest;
import com.shubh.userservice.application.models.SigninResponse;
import com.shubh.userservice.application.models.User;
import com.shubh.userservice.application.services.MailService;
import com.shubh.userservice.application.services.UserService;

@RestController
@RequestMapping("/auth")
public class UserController {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private MailService mailService;
	
	@PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> login(@RequestBody SigninRequest signinRequest)
	{
		final UserDetails userDetails = userService.loadUserByUsername(signinRequest.getUsername());
		if(userDetails == null || !passwordEncoder.matches(signinRequest.getPassword(), userDetails.getPassword())) {
			throw new RuntimeException("User not found or Invalid Credentials!!");
		}
		final String token = jwtTokenUtil.generateToken(userDetails);
		final long expiresIn = (jwtTokenUtil.getExpirationDateFromToken(token).getTime()-(new Date()).getTime());
		final boolean isAdmin = userDetails.getAuthorities().contains(new SimpleGrantedAuthority("ADMIN"));
		return ResponseEntity.ok(new SigninResponse(userDetails.getUsername(), token, isAdmin, expiresIn));
	}
	
	@PostMapping(path = "/signup", consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> signup(@RequestBody User user, HttpServletRequest request)
	{
		user = userService.signup(user);
		if(user == null) {
			throw new RuntimeException("User already exists with given username or email!!");
		}
		
		String appUrl = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
		Mail mail = new Mail();
		mail.setMailFrom("agarwalsh2652@gmail.com");
		mail.setMailTo(user.getEmail());
		mail.setMailSubject("Email Confirmation");
		mail.setMailContent("To confirm you email-address, please click the link below:\n"
				+ appUrl + "/auth/confirm?token=" + user.getConfirmationToken());
		mailService.sendEmail(mail);
		
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(user);
	}
	
	@GetMapping(path = "/confirm")
	public ResponseEntity<?> activate(@RequestParam String token)
	{
		User user = userService.activate(token);
		if(user == null) {
			throw new RuntimeException("Invalid token : " + token);
		}
		return ResponseEntity.ok("Email Successfully activated");
	}
	
	@PutMapping(path = "/update", consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> update(@RequestBody User user)
	{
		User updatedUser = userService.update(user);
		if(updatedUser == null) {
			throw new RuntimeException("User not found with id : " + user.getId());
		}
		return ResponseEntity.ok(updatedUser);
	}
	
	@GetMapping(path="/test")
	public String TestApi() {
		return "Authenticated User";
	}
}
