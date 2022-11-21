package com.maeve.lms.Entity;

import javax.persistence.Table;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name = "tbl_student")
public class StudentEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int studentId;
	
	private Set<CourseEntity> course;
	
	public StudentEntity() {
		super();
	}

	public StudentEntity(int studentId, Set<CourseEntity> course) {
		super();
		this.studentId = studentId;
		this.course = course;
	}
	
	@Override
	public String toString() {
		return "StudentEntity [studentId=" + studentId + ", course=" + course + "]";
	}

	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public Set<CourseEntity> getCourse() {
		return course;
	}
	public void setCourse(Set<CourseEntity> course) {
		this.course = course;
	}

	
}