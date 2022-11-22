package com.maeve.lms.Entity;

import javax.persistence.Table;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
@Table(name = "tbl_student")
public class StudentEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String studentUsername;
	private String studentPassword;
	private String studentFullname;
	private String studentEmail;
	private String studentPhoneNumber;
	private String studentAddress;
	
	@ManyToMany
	Set<CourseEntity> course;

	public StudentEntity() {}

	public StudentEntity(int id, String studentUsername, String studentPassword, String studentFullname,
			String studentEmail, String studentPhoneNumber, String studentAddress, Set<CourseEntity> course) {
		super();
		this.id = id;
		this.studentUsername = studentUsername;
		this.studentPassword = studentPassword;
		this.studentFullname = studentFullname;
		this.studentEmail = studentEmail;
		this.studentPhoneNumber = studentPhoneNumber;
		this.studentAddress = studentAddress;
		this.course = course;
	}

	public int getStudentId() {
		return id;
	}

//	public void setStudentId(int studentId) {
//		this.studentId = studentId;
//	}

	public String getStudentUsername() {
		return studentUsername;
	}

	public void setStudentUsername(String studentUsername) {
		this.studentUsername = studentUsername;
	}

	public String getStudentPassword() {
		return studentPassword;
	}

	public void setStudentPassword(String studentPassword) {
		this.studentPassword = studentPassword;
	}

	public String getStudentFullname() {
		return studentFullname;
	}

	public void setStudentFullname(String studentFullname) {
		this.studentFullname = studentFullname;
	}

	public String getStudentEmail() {
		return studentEmail;
	}

	public void setStudentEmail(String studentEmail) {
		this.studentEmail = studentEmail;
	}

	public String getStudentPhoneNumber() {
		return studentPhoneNumber;
	}

	public void setStudentPhoneNumber(String studentPhoneNumber) {
		this.studentPhoneNumber = studentPhoneNumber;
	}

	public String getStudentAddress() {
		return studentAddress;
	}

	public void setStudentAddress(String studentAddress) {
		this.studentAddress = studentAddress;
	}

	public Set<CourseEntity> getCourse() {
		return course;
	}

	public void setCourse(Set<CourseEntity> course) {
		this.course = course;
	}
	
}