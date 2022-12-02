import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentService from './Services/StudentService.js';
import ReadStudents from './Component/ReadStudents';
import Login from './Component/Login';
import StudentDashboard from './Component/StudentDashboard';
import SelectEntity from './Component/SelectEntity';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className = "App">
      <Router>
        <Routes>
        <Route exact path="/" element ={<StudentDashboard/>}/>
          <Route exact path="/Logout" element ={<SelectEntity/>}/>
          <Route exact path="/login" element ={<Login/>}/>
          <Route exact path="/StudentDashboard" element ={<StudentDashboard/>}/>
          <Route exact path="/AdminDashboard" element ={<StudentDashboard/>}/>
          <Route exact path="/TeacherDashboard" element ={<StudentDashboard/>}/>
          <Route exact path="/CourseDashboard" element ={<StudentDashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
