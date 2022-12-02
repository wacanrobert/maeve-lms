import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentService from './Services/StudentService.js';
import ReadStudents from './Component/ReadStudents';
import Login from './Component/Login';
import StudentDashboard from './Component/StudentDashboard';
import LandingPage from './Component/LandingPage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className = "App">
      <Router>
        <Routes>
          <Route exact path="/" element ={<LandingPage/>}/>
          <Route exact path="/login" element ={<Login/>}/>
          <Route exact path="/students" element ={<StudentDashboard/>}/>
          <Route exact path="/admins" element ={<StudentDashboard/>}/>
          <Route exact path="/teachers" element ={<StudentDashboard/>}/>
          <Route exact path="/courses" element ={<StudentDashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
