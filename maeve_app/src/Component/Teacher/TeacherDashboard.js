import React from 'react';
import TeacherAppBar from './TeacherAppBar';
import TeacherMenuBar from './TeacherMenuBar';

export default function TeacherDashboard(){

        return (
            <div className ="App">

                <TeacherAppBar/>   
                <TeacherMenuBar/>  
                <h1>This is a Teacher's Dashboard</h1>
            </div>
        );
}