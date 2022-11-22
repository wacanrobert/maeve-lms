package com.maeve.lms.Entity;

import javax.persistence.Table;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name = "tbl_User")
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	
	private String username;
	private String userPassword;
	private String userFullname;
	private String userEmail;
	private String userPhoneNumber;
	private String userAddress;
	
	private StudentEntity student;
	private AdminEntity admin;
	private TeacherEntity teacher;
	
}