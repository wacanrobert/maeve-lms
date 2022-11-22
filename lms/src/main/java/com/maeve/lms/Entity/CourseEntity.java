package com.maeve.lms.Entity;

import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_course")
public class CourseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int courseId;
	
	private String courseName;
	private String courseDescription;
	private int courseUnits;

	@ManyToMany
	Set<StudentEntity> students;
	
	@OneToMany (cascade = CascadeType.MERGE)
	Set<LessonEntity> lessons;
	
	@ManyToOne
	@JoinColumn (name="teacherId")
	TeacherEntity teacher;
	
	
	public CourseEntity() {}


	public CourseEntity(int courseId, String courseName, String courseDescription, int courseUnits,
			Set<StudentEntity> students, Set<LessonEntity> lessons, TeacherEntity teacher) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseDescription = courseDescription;
		this.courseUnits = courseUnits;
		this.students = students;
		this.lessons = lessons;
		this.teacher = teacher;
	}


	public int getCourseId() {
		return courseId;
	}


	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}


	public String getCourseName() {
		return courseName;
	}


	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}


	public String getCourseDescription() {
		return courseDescription;
	}


	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}


	public int getCourseUnits() {
		return courseUnits;
	}


	public void setCourseUnits(int courseUnits) {
		this.courseUnits = courseUnits;
	}


	public Set<StudentEntity> getStudents() {
		return students;
	}


	public void setStudents(Set<StudentEntity> students) {
		this.students = students;
	}


	public Set<LessonEntity> getLessons() {
		return lessons;
	}


	public void setLessons(Set<LessonEntity> lessons) {
		this.lessons = lessons;
	}


	public TeacherEntity getTeacher() {
		return teacher;
	}


	public void setTeacher(TeacherEntity teacher) {
		this.teacher = teacher;
	}


	@Override
	public String toString() {
		return "CourseEntity [courseId=" + courseId + ", courseName=" + courseName + ", courseDescription="
				+ courseDescription + ", courseUnits=" + courseUnits + ", students=" + students + ", lessons=" + lessons
				+ ", teacher=" + teacher + "]";
	}

	
	
}

