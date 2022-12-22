import axios from "axios";

const COURSE_GET_DATABASE_URL = "http://localhost:8080/course/getAllCourses";
const COURSE_POST_DATABASE_URL = 


class CourseService{

    getCourses(){
        return axios.get(COURSE_GET_DATABASE_URL);
    }
    postCourses(){
        return axios.get()
    }

}

export default new CourseService()