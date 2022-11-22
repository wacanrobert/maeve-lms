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

import com.maeve.lms.Entity.LessonEntity;
import com.maeve.lms.Service.LessonService;

@RestController
@RequestMapping("/lesson")
public class LessonController {
	
	@Autowired
	LessonService leserv;
	
	//Create or insert a record
	@PostMapping("/postLesson")
	public LessonEntity insertLesson(@RequestBody LessonEntity lesson) {
		return leserv.insertLesson(lesson);
	}
	
	//Read all records
	@GetMapping("/getAllLessons")
	public List<LessonEntity> getAllLessons(){
		return leserv.getAllLessons();
	}
	
	//Update a record
	@PutMapping("/putLesson")
	public LessonEntity putLesson(@RequestParam int id,@RequestBody LessonEntity newLessonDetails) throws Exception {
		return leserv.putLesson(id, newLessonDetails);
	}
	//Delete
	@DeleteMapping("/deleteLesson/{id}")
	public String deleteLesson(@PathVariable int id) {
		return leserv.deleteLesson(id);
	}
}
