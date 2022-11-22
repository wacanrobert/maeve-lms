package com.maeve.lms.Entity;

import javax.persistence.Table;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
<<<<<<< HEAD
import javax.persistence.ManyToOne;
=======
>>>>>>> 6d5ba15b9c7058c9e1527eb765fa2ac5b15bb50d
import javax.persistence.OneToMany;

@Entity
@Table(name = "tbl_student")
public class StudentEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int studentId;
	
	private String studentName;
	private String studentPassword;
	private String studentFullname;
	private String studentEmail;
	private String studentPhoneNumber;
	private String studentAddress;
	
	@OneToMany(cascade = CascadeType.MERGE)
	private Set<CourseEntity> course;

	public StudentEntity() {
		super();
	}

	public StudentEntity(int studentId, String studentName, String studentPassword, String studentFullname,
			String studentEmail, String studentPhoneNumber, String studentAddress, Set<CourseEntity> course) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentPassword = studentPassword;
		this.studentFullname = studentFullname;
		this.studentEmail = studentEmail;
		this.studentPhoneNumber = studentPhoneNumber;
		this.studentAddress = studentAddress;
		this.course = course;
	}

	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
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
<<<<<<< HEAD
=======
	
	
>>>>>>> 6d5ba15b9c7058c9e1527eb765fa2ac5b15bb50d
}