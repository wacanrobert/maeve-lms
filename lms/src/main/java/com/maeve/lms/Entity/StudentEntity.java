package com.maeve.lms.Entity;

import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name = "tbl_student")
public class StudentEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String firstname;
	private String lastname;
	private String course;
	private int yearlevel;
	
	public StudentEntity() {
		super();
	}

	public StudentEntity(int id, String firstname, String lastname, String course, int yearlevel) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.course = course;
		this.yearlevel = yearlevel;
	}
	
	@Override
	public String toString() {
		return "StudentEntity [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", course=" + course
				+ ", yearlevel=" + yearlevel + "]";
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public int getYearLevel() {
		return yearlevel;
	}
	public void setYearLevel(int yearlevel) {
		this.yearlevel = yearlevel;
	}
	
	
}