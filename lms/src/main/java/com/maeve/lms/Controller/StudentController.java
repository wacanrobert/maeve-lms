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

import com.maeve.lms.Entity.StudentEntity;
import com.maeve.lms.Service.StudentService;


@RestController
@RequestMapping("/student")
public class StudentController {
	
	@Autowired
	StudentService stserv;
	
	//printHello
	@GetMapping("/print")
	public String printHelloStudent(){
		return "Hello, Student!";
	}
	
	//Create or insert a student record
	@PostMapping("/postStudent")
	public StudentEntity insertStudent(@RequestBody StudentEntity student) {
		return stserv.insertStudent(student);
	}
	
	//Read
	@GetMapping("/displayAllStudents")
	public List<StudentEntity> getAllStudents(){
		return stserv.getAllStudents();
	}
	
	//Read a record by fullname
	@GetMapping("/getByStudentFullname")
	public StudentEntity findByStudentFullname(@RequestParam String studentfullname) {
		return stserv.findByFirstName(studentfullname);
	}
	
	//Update a Record
	@PutMapping("/putStudent")
	public StudentEntity putStudent(@RequestParam int id,@RequestBody StudentEntity newStudentDetails) throws Exception{
		return stserv.putStudent(id, newStudentDetails);
	}
	
	//Delete a record
	@DeleteMapping("/deleteStudent/{id}")
	public String deleteStudent(@PathVariable int id) {
		return stserv.deleteStudent(id);
	}

}