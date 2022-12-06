import React from 'react';
import TeacherAppBar from './TeacherAppBar';
import TeacherMenuBar from './TeacherMenuBar';
import TeacherNavBar from './TeacherNavBar';

export default function TeacherDashboard(){

        return (
            <div className ="App">

                <TeacherAppBar/>   
                <TeacherNavBar/>
                <h1>This is a Teacher's Dashboard</h1>
            </div>
        );
}