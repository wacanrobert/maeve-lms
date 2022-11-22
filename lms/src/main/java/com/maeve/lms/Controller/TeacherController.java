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

import com.maeve.lms.Entity.TeacherEntity;
import com.maeve.lms.Service.TeacherService;

@RestController
@RequestMapping("/teacher")
public class TeacherController {
	
	@Autowired
	TeacherService tchserve;
	
	//printHello
	@GetMapping("/print")
	public String printHelloTeacher(){
		return "Hello, Teacher!";
	}
	
	//Create or insert a student record
	@PostMapping("/postTeacher")
	public TeacherEntity insertTeacher(@RequestBody TeacherEntity student) {
		return tchserve.insertTeacher(student);
	}
	
	//Read
	@GetMapping("/displayAllTeachers")
	public List<TeacherEntity> getAllTeachers(){
		return tchserve.getAllTeachers();
	}
	
	//Read a record by firstname
	@GetMapping("/getByFirstname")
	public TeacherEntity findByFirstname(@RequestParam String firstname) {
		return tchserve.findByFirstName(firstname);
	}
	
	//Update a Record
	@PutMapping("/putTeacher")
	public TeacherEntity putStudent(@RequestParam int id,@RequestBody TeacherEntity newTeachertDetails) throws Exception{
		return tchserve.putTeacher(id, newTeachertDetails);
	}
	
	//Delete a record
	@DeleteMapping("/deleteTeacher/{id}")
	public String deleteTeacher(@PathVariable int id) {
		return tchserve.deleteTeacher(id);
	}
}
