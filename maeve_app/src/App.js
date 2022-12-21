import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentService from './Services/StudentService.js';
import ReadStudents from './Component/ReadStudents';
import Login from './Component/Login';
import StudentDashboard from './Component/StudentDashboard';
import AdminDashboard from './Component/AdminDashboard';
import AdminTable from './Component/AdminTable';
import CourseTable from './Component/CourseTable';
import TeacherTable from './Component/TeacherTable';
import StudentTable from './Component/StudentTable';
import AdminProfile from './Component/AdminProfile';
import TeacherDashboard from './Component/Teacher/TeacherDashboard';
import LandingPage from './Component/LandingPage';
import CourseDashboard from './Component/CourseDashboard';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import StudentProfile from './Component/StudentProfile';
import TeacherProfileDetails from './Component/Teacher/TeacherProfileDetails';
import TeacherProfileSettings from './Component/Teacher/TeacherProfileSettings';
import TeacherStudentsTable from './Component/Teacher/TeacherStudentsTable';
import TeacherCourseTable from './Component/Teacher/TeacherCourseTable';
import AdminViewCourse from './Component/Course/GetAll_AdminViewCourse';
import AdminAddCourse from './Component/Course/AdminAddCourse';
import AdminEditCourse from './Component/Course/AdminEditCourse';
import AdminDeleteCourse from './Component/Course/AdminDeleteCourse';
import StudentLoginPage from './Component/StudentLoginPage';
import RegisterPage from './Component/RegisterPage';
import Add_AdminViewCourse from './Component/Course/Add_AdminViewCourse';
import Update_AdminViewCourse from './Component/Course/Update_AdminViewCourse';
import Update_WriteHere from './Component/Course/Update_WriteHere';
import Delete_Selected from './Component/Course/Delete_Selected';

function App() {
  return (
    <div className = "App">
      <Router>
        <Routes>
          <Route exact path="/" element ={<LandingPage/>}/>
          <Route exact path="/Home" element ={<LandingPage/>}/>
          <Route exact path="/Logout" element ={<LandingPage/>}/>
          <Route exact path="/login" element ={<Login/>}/>
          <Route exact path="/students" element ={<StudentDashboard/>}/>
          <Route exact path="/StudentDashboard" element ={<StudentDashboard/>}/>
          <Route exact path="/StudentProfile" element ={<StudentProfile/>}/>
          <Route exact path="/AdminDashboard" element ={<AdminDashboard/>}/>
          <Route exact path="/AdminList" element ={<AdminTable/>}/>
          <Route exact path="/CourseList" element ={<AdminViewCourse/>}/>
          <Route exact path="/TeacherList" element ={<TeacherTable/>}/>
          <Route exact path="/StudentList" element ={<StudentTable/>}/>
          <Route exact path="/AdminProfile" element ={<AdminProfile/>}/>
          <Route exact path="/teachers" element ={<TeacherDashboard/>}/>
          <Route exact path="/TeacherDashboard" element ={<TeacherDashboard/>}/>
          <Route exact path="/TeacherProfileSettings" element ={<TeacherProfileSettings/>}/>
          <Route exact path="/TeacherProfileDetails" element ={<TeacherProfileDetails/>}/>
          <Route exact path="/TeacherStudentsTable" element ={<TeacherStudentsTable/>}/>
          <Route exact path="/TeacherCourseTable" element ={<TeacherCourseTable/>}/>
          <Route exact path="/courses" element ={<AdminViewCourse/>}/>
          <Route exact path="/postCourse" element ={<AdminAddCourse/>}/>
          <Route exact path="/putCourse" element ={<AdminEditCourse/>}/>
          <Route exact path="/deleteCourse" element ={<AdminDeleteCourse/>}/>
          <Route exact path="/viewCourse" element ={<AdminViewCourse/>}/>
          <Route exact path="/register" element ={<RegisterPage/>}/>
          <Route exact path="/StudentLogin" element ={<StudentLoginPage/>}/>
          <Route exact path="/addViewCourse" element = {<Add_AdminViewCourse/>}/>
          <Route exact path="/updateViewCourses" element = {<Update_AdminViewCourse/>}/> 
          <Route exact path="/id=6" element = {<Update_WriteHere/>}/> 
          <Route exact path= "/delete/id=6" element = {<Delete_Selected/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;