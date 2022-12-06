import React from 'react';
import StudentAppBar from './StudentAppBar';
import StudentMenuBar from './StudentMenuBar';
import StudentNavBar from './StudentNavBar';
import './AdjustAppBar.css';

export default function StudentDashboard(){

        return (
            <div className ="AdjustBar">
                  
                <StudentNavBar/>
                <StudentAppBar/> 
                
                <h1>Welcome Student to the Dashboard</h1>
            </div>
        );
}