import React from 'react';
import StudentAppBar from './StudentAppBar';
import StudentMenuBar from './StudentMenuBar';
import StudentNavBar from './StudentNavBar';

export default function StudentDashboard(){

        return (
            <div className ="App">
                <StudentAppBar/>   
                <StudentNavBar/>
                <h1>Welcome Student to the Dashboard</h1>
            </div>
        );
}