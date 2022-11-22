package com.maeve.lms.Entity;

import javax.persistence.Table;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
@Table(name = "tbl_teacher")
public class TeacherEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	

	private String teacherUsername;
	private String teacherPassword;
	private String teacherFullname;
	private String teacherEmail;
	private String teacherPhoneNumber;
	private String teacherAddress;
	
	@OneToMany(cascade = CascadeType.MERGE)
	private Set<CourseEntity> course;


	
	public TeacherEntity() {}
	
	
	public TeacherEntity(int id, String teacherUsername, String teacherPassword, String teacherFullname,
			String teacherEmail, String teacherPhoneNumber, String teacherAddress, Set<CourseEntity> course) {
		super();
		this.id = id;
		this.teacherUsername = teacherUsername;
		this.teacherPassword = teacherPassword;
		this.teacherFullname = teacherFullname;
		this.teacherEmail = teacherEmail;
		this.teacherPhoneNumber = teacherPhoneNumber;
		this.teacherAddress = teacherAddress;
		this.course = course;
	}


	public int getId() {
		return id;
	}


//	public void setId(int id) {
//		this.id = id;
//	}


	public String getTeacherUsername() {
		return teacherUsername;
	}


	public void setTeacherUsername(String teacherUsername) {
		this.teacherUsername = teacherUsername;
	}


	public String getTeacherPassword() {
		return teacherPassword;
	}


	public void setTeacherPassword(String teacherPassword) {
		this.teacherPassword = teacherPassword;
	}


	public String getTeacherFullname() {
		return teacherFullname;
	}


	public void setTeacherFullname(String teacherFullname) {
		this.teacherFullname = teacherFullname;
	}


	public String getTeacherEmail() {
		return teacherEmail;
	}


	public void setTeacherEmail(String teacherEmail) {
		this.teacherEmail = teacherEmail;
	}


	public String getTeacherPhoneNumber() {
		return teacherPhoneNumber;
	}


	public void setTeacherPhoneNumber(String teacherPhoneNumber) {
		this.teacherPhoneNumber = teacherPhoneNumber;
	}


	public String getTeacherAddress() {
		return teacherAddress;
	}


	public void setTeacherAddress(String teacherAddress) {
		this.teacherAddress = teacherAddress;
	}


	public Set<CourseEntity> getCourse() {
		return course;
	}


	public void setCourse(Set<CourseEntity> course) {
		this.course = course;
	}
	
}