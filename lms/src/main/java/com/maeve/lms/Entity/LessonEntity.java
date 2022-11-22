package com.maeve.lms.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_lesson")
public class LessonEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int lessonId; 
	
	@ManyToOne
	@JoinColumn(name="courseId")
	CourseEntity course;
	
	private String lessonLesson;
	private String lessoDescription;
	
	public LessonEntity() {}

	public LessonEntity(int lessonId, CourseEntity course, String lessonLesson, String lessoDescription) {
		super();
		this.lessonId = lessonId;
		this.course = course;
		this.lessonLesson = lessonLesson;
		this.lessoDescription = lessoDescription;
	}

	public int getLessonId() {
		return lessonId;
	}

	public void setLessonId(int lessonId) {
		this.lessonId = lessonId;
	}

	public CourseEntity getCourse() {
		return course;
	}

	public void setCourse(CourseEntity course) {
		this.course = course;
	}

	public String getLessonLesson() {
		return lessonLesson;
	}

	public void setLessonLesson(String lessonLesson) {
		this.lessonLesson = lessonLesson;
	}

	public String getLessoDescription() {
		return lessoDescription;
	}

	public void setLessoDescription(String lessoDescription) {
		this.lessoDescription = lessoDescription;
	}

	@Override
	public String toString() {
		return "LessonEntity [lessonId=" + lessonId + ", course=" + course + ", lessonLesson=" + lessonLesson
				+ ", lessoDescription=" + lessoDescription + "]";
	}

}
