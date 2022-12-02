import axios from "axios";

const COURSE_BASE_URL = "http://localhost:8080/course/getAllCourses";

class CourseService{

    getCourses(){
        return axios.get(COURSE_DATABASE_URL);
    }

}

export default new CourseService()