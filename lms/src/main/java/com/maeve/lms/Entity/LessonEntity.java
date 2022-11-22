package com.maeve.lms.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_course")
public class LessonEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name="id")
	CourseEntity course;
	
	private String lesson;
	private String description;
	
	public LessonEntity() {}

	public LessonEntity(int id, CourseEntity course, String lesson, String description) {
		super();
		this.id = id;
		this.course = course;
		this.lesson = lesson;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public CourseEntity getCourse() {
		return course;
	}

	public void setCourse(CourseEntity course) {
		this.course = course;
	}

	public String getLesson() {
		return lesson;
	}

	public void setLesson(String lesson) {
		this.lesson = lesson;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "LessonEntity [id=" + id + ", course=" + course + ", lesson=" + lesson + ", description=" + description
				+ "]";
	}

	
	
}
