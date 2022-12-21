import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Component/Login';
import StudentDashboard from './Component/StudentDashboard';
import AdminDashboard from './Component/AdminDashboard';
import AdminProfile from './Component/AdminProfile';
import AdminLoginPage from './Component/AdminLoginPage';
import AdminRegisterPage from './Component/AdminRegisterPage';
import AdminTable from './Component/AdminTable';
import AdminTableAdd from './Component/AdminTableAdd';
import AdminTableUpdate from './Component/AdminTableUpdate';
import AdminPageAdd from './Component/AdminPageAdd';
import AdminPageUpdate from './Component/AdminPageUpdate';
import CourseTable from './Component/CourseTable';
import TeacherTable from './Component/TeacherTable';
import StudentTable from './Component/StudentTable';
import TeacherDashboard from './Component/Teacher/TeacherDashboard';
import LandingPage from './Component/LandingPage';
import CourseDashboard from './Component/CourseDashboard';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import StudentProfile from './Component/StudentProfile';
import TeacherProfileDetails from './Component/Teacher/TeacherProfileDetails';
import TeacherProfileSettings from './Component/Teacher/TeacherProfileSettings';
import TeacherStudentsTable from './Component/Teacher/TeacherStudentsTable';
import TeacherCourseTable from './Component/Teacher/TeacherCourseTable';
import StudentLoginPage from './Component/StudentLoginPage';
import RegisterPage from './Component/RegisterPage';

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
          <Route exact path="/AdminProfile" element ={<AdminProfile/>}/>
          <Route exact path="/AdminLogin" element ={<AdminLoginPage/>}/>
          <Route exact path="/AdminRegister" element ={<AdminRegisterPage/>}/>
          <Route exact path="/AdminList" element ={<AdminTable/>}/>
          <Route exact path="/AdminListAdd" element ={<AdminTableAdd/>}/>
          <Route exact path="/AdminListUpdate" element ={<AdminTableUpdate/>}/>
          <Route exact path="/AdminPageAdd" element ={<AdminPageAdd/>}/>
          <Route exact path="/AdminPageUpdate" element ={<AdminPageUpdate/>}/>
          <Route exact path="/CourseList" element ={<CourseTable/>}/>
          <Route exact path="/TeacherList" element ={<TeacherTable/>}/>
          <Route exact path="/StudentList" element ={<StudentTable/>}/>
          <Route exact path="/teachers" element ={<TeacherDashboard/>}/>
          <Route exact path="/TeacherDashboard" element ={<TeacherDashboard/>}/>
          <Route exact path="/TeacherProfileSettings" element ={<TeacherProfileSettings/>}/>
          <Route exact path="/TeacherProfileDetails" element ={<TeacherProfileDetails/>}/>
          <Route exact path="/TeacherStudentsTable" element ={<TeacherStudentsTable/>}/>
          <Route exact path="/TeacherCourseTable" element ={<TeacherCourseTable/>}/>
          <Route exact path="/StudentCourses" element ={<CourseDashboard/>}/>
          <Route exact path="/courses" element ={<CourseDashboard/>}/>
          <Route exact path="/register" element ={<RegisterPage/>}/>
          <Route exact path="/StudentLogin" element ={<StudentLoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
