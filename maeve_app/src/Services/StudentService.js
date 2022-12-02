import axios from "axios";
import React from "react";

const STUDENT_DATABASE_URL = "http://localhost:8080/student/displayAllStudents";

class StudentService{

    getStudents(){
        return axios.get(STUDENT_DATABASE_URL);
    }

}

export default new StudentService()