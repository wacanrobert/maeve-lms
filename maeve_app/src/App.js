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
import AdminTableDelete from './Component/AdminTableDelete';
import AdminPageAdd from './Component/AdminPageAdd';
import AdminPageUpdate from './Component/AdminPageUpdate';
import AdminPageDelete from './Component/AdminPageDelete';
import AdminProfileEdit from './Component/AdminProfileEdit';
import CourseTable from './Component/CourseTable';
import TeacherTable from './Component/TeacherTable';
import StudentTable from './Component/StudentTable';
import TeacherDashboard from './Component/TeacherDashboard';
import LandingPage from './Component/LandingPage';
import CourseDashboard from './Component/CourseDashboard';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import StudentProfile from './Component/StudentProfile';
import TeacherProfileDetails from './Component/Teacher/TeacherProfileDetails';
import TeacherProfileSettings from './Component/Teacher/TeacherProfileSettings';
import TeacherStudentsTable from './Component/TeacherStudentsTable';
import TeacherCourseTable from './Component/TeacherCourseTable';
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
import Delete_AdminViewCourse from './Component/Course/Delete_AdminViewCourse';
import StudentGetAll from './Component/StudentGetAll';
import StudentEditProfile from './Component/StudentEditProfile';
import StudentEditedProfile from './Component/StudentEditedProfile';
import StudentTableAdd from './Component/StudentTableAdd';
import StudentPageAdd from './Component/StudentPageAdd';
import StudentPageUpdate from './Component/StudentPageUpdate';
import StudentTableUpdate from './Component/StudentTableUpdate';
import StudentPageDelete from './Component/StudentPageDelete';
import StudentTableDelete from './Component/StudentTableDelete';
import GetAll_AdminViewCourse from './Component/Course/GetAll_AdminViewCourse';
import StudentCourseTable from './Component/StudentCourseTable';
import TeacherLoginPage from './Component/TeacherLoginPage';
import TeacherRegisterPage from './Component/TeacherRegisterPage';
import TeacherPageAdd from './Component/TeacherPageAdd';
import TeacherStudentsTableAdd from './Component/TeacherStudentsTableAdd';
import TeacherPageUpdate from './Component/TeacherPageUpdate';
import TeacherProfile from './Component/TeacherProfile';
import TeacherEditProfile from './Component/TeacherEditProfile';
import TeacherEditedProfile from './Component/TeacherEditedProfile';
import TeacherLogout from './Component/TeacherLogout';


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
          <Route exact path="/Admin Profile" element ={<AdminProfile/>}dentlist/>
          <Route exact path="/Logout Admin" element ={<AdminLoginPage/>}/>
          <Route exact path="/AdminLogin" element ={<AdminLoginPage/>}/>
          <Route exact path="/AdminRegister" element ={<AdminRegisterPage/>}/> 
          <Route exact path="/AdminList" element ={<AdminTable/>}/>
          <Route exact path="/AdminListAdd" element ={<AdminTableAdd/>}/>
          <Route exact path="/AdminListUpdate" element ={<AdminTableUpdate/>}/>
          <Route exact path="/AdminListDelete" element ={<AdminTableDelete/>}/>
          <Route exact path="/AdminPageAdd" element ={<AdminPageAdd/>}/>
          <Route exact path="/AdminPageUpdate" element ={<AdminPageUpdate/>}/>
          <Route exact path="/AdminPageDelete" element ={<AdminPageDelete/>}/>
          <Route exact path="/AdminProfile" element ={<AdminProfile/>}/>
          <Route exact path="/AdminProfileEdit" element ={<AdminProfileEdit/>}/>
          <Route exact path="/CourseList" element ={<CourseTable/>}/>
          <Route exact path="/TeacherList" element ={<TeacherTable/>}/>
          <Route exact path="/StudentList" element ={<StudentTable/>}/>
          <Route exact path="/teachers" element ={<TeacherDashboard/>}/>
          <Route exact path="/TeacherDashboard" element ={<TeacherDashboard/>}/>
          <Route exact path="/TeacherProfileSettings" element ={<TeacherProfileSettings/>}/>
          <Route exact path="/TeacherProfileDetails" element ={<TeacherProfileDetails/>}/>
          <Route exact path="/TeacherStudentsTable" element ={<TeacherStudentsTable/>}/>
          <Route exact path="/TeacherCourseTable" element ={<TeacherCourseTable/>}/>
          <Route exact path="/courses" element ={<GetAll_AdminViewCourse/>}/>
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
          <Route exact path= "/delete-success" element = {<Delete_AdminViewCourse/>}/> 
          <Route exact path="/fetch" element ={<StudentGetAll/>}/>
          <Route exact path="/StudentEditProfile" element ={<StudentEditProfile/>}/>
          <Route exact path="/StudentEditedProfile" element ={<StudentEditedProfile/>}/>
          <Route exact path="/StudentLogout" element ={<StudentLoginPage/>}/>
          <Route exact path="/StudentPageAdd" element ={<StudentPageAdd/>}/>
          <Route exact path="/StudentListAdd" element ={<StudentTableAdd/>}/>
          <Route exact path="/StudentList" element ={<StudentTable/>}/>
          <Route exact path="/StudentPageUpdate" element ={<StudentPageUpdate/>}/>
          <Route exact path="/StudentListUpdate" element ={<StudentTableUpdate/>}/>
          <Route exact path="/StudentPageDelete" element ={<StudentPageDelete/>}/>
          <Route exact path="/StudentListDelete" element ={<StudentTableDelete/>}/>
          <Route exact path="/StudentCourseList" element ={<StudentCourseTable/>}/>
          <Route exact path="/TeacherLogin" element ={<TeacherLoginPage/>}/>
          <Route exact path="/TeacherRegister" element ={<TeacherRegisterPage/>}/> 
          <Route exact path="/TeacherPageAdd" element ={<TeacherPageAdd/>}/> 
          <Route exact path="/TeacherStudentsTableAdd" element ={<TeacherStudentsTableAdd/>}/> 
          <Route exact path="/TeacherPageUpdate" element ={<TeacherPageUpdate/>}/> 
          <Route exact path="/TeacherProfile" element ={<TeacherProfile/>}/> 
          <Route exact path="/TeacherEditProfile" element ={<TeacherEditProfile/>}/> 
          <Route exact path="/TeacherEditedProfile" element ={<TeacherEditedProfile/>}/> 
          <Route exact path="/TeacherLogout" element ={<TeacherLogout/>}/> 

        </Routes>
      </Router>
    </div>
  );
}

export default App;