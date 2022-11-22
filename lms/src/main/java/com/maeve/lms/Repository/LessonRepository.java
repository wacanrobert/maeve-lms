package com.maeve.lms.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.maeve.lms.Entity.LessonEntity;

public interface LessonRepository extends JpaRepository<LessonEntity, Integer>{

}

