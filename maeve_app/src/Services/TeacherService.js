import axios from "axios";
import React from "react";

const TEACHER_DATABASE_URL = "http://localhost:8080/admin/getAllTeachers";

class TeacherService{

    getTeachers(){
        return axios.get(TEACHER_DATABASE_URL);
    }

}

export default new TeacherService()