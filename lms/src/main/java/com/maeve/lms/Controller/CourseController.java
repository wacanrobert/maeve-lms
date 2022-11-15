package com.maeve.lms.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.maeve.lms.Entity.CourseEntity;
import com.maeve.lms.Service.CourseService;

@RestController
@RequestMapping("/course")
public class CourseController {
	@Autowired
	CourseService coserv;
	
	//Create or insert a record
	@PostMapping("/postCourse")
	public CourseEntity insertCourse(@RequestBody CourseEntity course) {
		return coserv.insertCourse(course);
	}
	
	//Read all records
	@GetMapping("/getAllCourses")
	public List<CourseEntity> getAllCourses(){
		return coserv.getAllCourses();
	}
	
	//Update a record
	@PutMapping("/putCourse")
	public CourseEntity putCourse(@RequestParam int id,@RequestBody CourseEntity newCourseDetails) throws Exception {
		return coserv.putCourse(id, newCourseDetails);
	}
	//Delete
	@DeleteMapping("/deleteCourse/{id}")
	public String deleteCourse(@PathVariable int id) {
		return coserv.deleteCourse(id);
	}

}
