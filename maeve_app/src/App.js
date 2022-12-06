import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentService from './Services/StudentService.js';
import ReadStudents from './Component/ReadStudents';
import Login from './Component/Login';
import StudentDashboard from './Component/StudentDashboard';
import AdminDashboard from './Component/AdminDashboard';
import TeacherDashboard from './Component/Teacher/TeacherDashboard';
import LandingPage from './Component/LandingPage';
import CourseDashboard from './Component/CourseDashboard';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import StudentProfile from './Component/StudentProfile';

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
          <Route exact path="/admins" element ={<AdminDashboard/>}/>
          <Route exact path="/teachers" element ={<TeacherDashboard/>}/>
          <Route exact path="/StudentCourses" element ={<CourseDashboard/>}/>
          <Route exact path="/courses" element ={<CourseDashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
