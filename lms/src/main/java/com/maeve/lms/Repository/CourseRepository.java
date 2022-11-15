package com.maeve.lms.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maeve.lms.Entity.CourseEntity;


public interface CourseRepository extends JpaRepository<CourseEntity, Integer>{

}
