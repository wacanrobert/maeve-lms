package com.maeve.lms.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_course")
public class CourseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int courseid;
	
	private String name;
	private String description;
	private int units;
	
	@OneToOne (cascade = CascadeType.MERGE)
	private String teacher;
	
	private int numberOfStudents;
	
	public CourseEntity() {}

	public CourseEntity(int courseid, String name, String description, int units, String teacher,
			int numberOfStudents) {
		super();
		this.courseid = courseid;
		this.name = name;
		this.description = description;
		this.units = units;
		this.teacher = teacher;
		this.numberOfStudents = numberOfStudents;
	}

	public int getCourseid() {
		return courseid;
	}

	public void setCourseid(int courseid) {
		this.courseid = courseid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getUnits() {
		return units;
	}

	public void setUnits(int units) {
		this.units = units;
	}

	public String getTeacher() {
		return teacher;
	}

	public void setTeacher(String teacher) {
		this.teacher = teacher;
	}

	public int getNumberOfStudents() {
		return numberOfStudents;
	}

	public void setNumberOfStudents(int numberOfStudents) {
		this.numberOfStudents = numberOfStudents;
	}
	
	

}

