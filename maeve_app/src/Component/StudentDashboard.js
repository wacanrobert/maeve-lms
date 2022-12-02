import React from 'react';
import StudentAppBar from './StudentAppBar';
import StudentMenuBar from './StudentMenuBar';

export default function StudentDashboard(){

        return (
            <div className ="App">
                <StudentAppBar/>   
                <StudentMenuBar/>
                <h1>Welcome Student</h1>
            </div>
        );
}