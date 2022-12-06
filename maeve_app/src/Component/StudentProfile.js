import React from 'react';
import StudentAppBar from './StudentAppBar';
import StudentMenuBar from './StudentMenuBar';
import StudentNavBar from './StudentNavBar';

export default function StudentProfile(){

        return (
            <div className ="App">
                <StudentAppBar/>   
                <StudentNavBar/>
                <h1>This is the Student Profile</h1>
            </div>
        );
}