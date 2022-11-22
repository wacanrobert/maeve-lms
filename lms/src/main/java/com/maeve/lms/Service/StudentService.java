package com.maeve.lms.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maeve.lms.Entity.StudentEntity;
import com.maeve.lms.Repository.StudentRepository;


@Service
public class StudentService {
	/*
	 * contains all the business logic of your system
	 * Create
	 * Read
	 * Update
	 * Delete
	 * */
	
	@Autowired
	StudentRepository srepo;
	
	//C - Create or insert a student record
	public StudentEntity insertStudent(StudentEntity student) {
		return srepo.save(student);
	}
	
	//R - Read a record from the table named tbl_student
	public List<StudentEntity> getAllStudents(){
		return srepo.findAll();
	}
	//R - Read or search student record 
	public StudentEntity findByStudentFullname(String studentfullname) {
		if(srepo.findByStudentFullname(studentfullname)!=null) {
			return srepo.findByStudentFullname(studentfullname);
		}else {
			return null;
		}
	}
	
	//Update a student record
	@SuppressWarnings("finally")
	public StudentEntity putStudent(int id, StudentEntity newStudentDetails) {
		
		StudentEntity student = new StudentEntity();
		
		try {
			//steps in updating
			//search id num of student
			student = srepo.findById(id).get();
			
			//update the record
			student.setStudentPassword(newStudentDetails.getStudentPassword());
			student.setCourse(newStudentDetails.getCourse());
			
			//save the information and return the value - refer to the 
			
		}catch(NoSuchElementException nex) {
			throw new Exception("ID Number " + id + "does not exist!");
		}finally {
			return srepo.save(student);
		}
	}
	
	//Delete a student record
	public String deleteStudent(int id) {
		String msg;
		//find the record
		if(srepo.findById(id)!=null) {
			srepo.deleteById(id);
			msg = "Student ID number "+id+" is successfully deleted!";
		}else {
			msg = "Student ID number "+id+" is NOT found!";
		}
		return msg;
	}


	
}