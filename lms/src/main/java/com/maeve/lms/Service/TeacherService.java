package com.maeve.lms.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maeve.lms.Entity.TeacherEntity;
import com.maeve.lms.Repository.TeacherRepository;

@Service
public class TeacherService {
	/*
	 * contains all the business logic of your system
	 * Create
	 * Read
	 * Update
	 * Delete
	 * */
	
	@Autowired
	TeacherRepository trepo;
	
	//C - Create or insert a student record
	public TeacherEntity insertTeacher(TeacherEntity teacher) {
		return trepo.save(teacher);
	}
	
	//R - Read a record from the table named tbl_teacher
	public List<TeacherEntity> getAllTeachers(){
		return trepo.findAll();
	}
	
	//R - Read or search teacher record 
	public TeacherEntity findByTeacherFullname(String firstname) {
		if(trepo.findByTeacherFullname(firstname)!=null) {
			return trepo.findByTeacherFullname(firstname);
		}else {
			return null;
		}
	}
	
	//Update a teacher record
	@SuppressWarnings("finally")
	public TeacherEntity putTeacher(int id, TeacherEntity newTeacherDetails) {
		
		TeacherEntity teacher = new TeacherEntity();
		
		try {
			//steps in updating
			//search id num of teacher
			teacher = trepo.findById(id).get();
			
			//update the record
			teacher.setTeacherUsername(newTeacherDetails.getTeacherUsername());
			teacher.setTeacherPassword(newTeacherDetails.getTeacherPassword());
			teacher.setCourse(newTeacherDetails.getCourse());
			
			//save the information and return the value - refer to the 
			
		}catch(NoSuchElementException nex) {
			throw new Exception("ID Number " + id + "does not exist!");
		}finally {
			return trepo.save(teacher);
		}
	}
	
	//Delete a student record
	public String deleteTeacher(int id) {
		String msg;
		//find the record
		if(trepo.findById(id)!=null) {
			trepo.deleteById(id);
			msg = "Student ID number "+id+" is successfully deleted!";
		}else {
			msg = "Student ID number "+id+" is NOT found!";
		}
		return msg;
	}
}
