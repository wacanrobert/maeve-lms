package com.maeve.lms.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.maeve.lms.Entity.LessonEntity;
import com.maeve.lms.Repository.LessonRepository;

@Service
public class LessonService {
	@Autowired
	LessonRepository lrepo;
	
	///Create or insert a record
	public LessonEntity insertLesson(LessonEntity lesson) {
		return lrepo.save(lesson);
	}
	
	//Read a record from the table named tbl_course
	public List<LessonEntity> getAllLessons(){
		return lrepo.findAll();
	}
	
	@SuppressWarnings("finally")
	public LessonEntity putLesson(int id, LessonEntity newLessonDetails) throws Exception {
		LessonEntity lesson = new LessonEntity();
		
		try {
			lesson = lrepo.findById(id).get(); //findById is predefined
			
			//2 - update the record
			lesson.setCourse(newLessonDetails.getCourse());
			lesson.setLessonLesson(newLessonDetails.getLessonLesson());
			lesson.setLessoDescription(newLessonDetails.getLessonDescription());
			//3 - save the information and return the value - refer to finally block
		}catch(NoSuchElementException nex) {
			throw new Exception("ID Number " + id + "does not exist");
		}finally {
			return lrepo.save(lesson);
		}
	}
	
	//Delete
	public String deleteLesson(int id) {
		String msg;
		if(lrepo.findById(id) != null) {
			lrepo.deleteById(id);
			
			msg = "Course ID Number " + id + " is successfully deleted!";
		}
		else
			msg = "Course ID Number " + id + " is NOT found!";	
		return msg;
	}

}
