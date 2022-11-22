package com.maeve.lms.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maeve.lms.Entity.CourseEntity;
import com.maeve.lms.Repository.CourseRepository;

@Service
public class CourseService {
	
	@Autowired
	CourseRepository crepo;
	
		///Create or insert a record
		public CourseEntity insertCourse(CourseEntity course) {
			return crepo.save(course);
		}
		
		//Read a record from the table named tbl_course
		public List<CourseEntity> getAllCourses(){
			return crepo.findAll();
		}
		
		//Update
		@SuppressWarnings("finally")
		public CourseEntity putCourse(int id, CourseEntity newCourseDetails) throws Exception {
			CourseEntity course = new CourseEntity();
			
			try {
				//1 - search the id number of the course
				course = crepo.findById(id).get();; //findById is predefined
				
				//2 - update the record
				course.setCourseName(newCourseDetails.getCourseName());
				course.setCourseDescription(newCourseDetails.getCourseDescription());
				course.setCourseUnits(newCourseDetails.getCourseUnits());
				//3 - save the information and return the value - refer to finally block
			}catch(NoSuchElementException nex) {
				throw new Exception("ID Number " + id + "does not exist");
			}finally {
				return crepo.save(course);
			}
		}
		//Delete
		public String deleteCourse(int id) {
			String msg;
			if(crepo.findById(id) != null) {
				crepo.deleteById(id);
				
				msg = "Course ID Number " + id + " is successfully deleted!";
			}
			else
				msg = "Course ID Number " + id + " is NOT found!";	
			return msg;
		}

}


