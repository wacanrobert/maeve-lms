import React from 'react';
import TeacherNavBar from './TeacherNavBar';
import TeacherAppBar from './TeacherAppBar';

export default function TeacherProfileSettings(){

        return (
            <div className ="App">
                <TeacherAppBar/> 
                <TeacherNavBar/> 
                <h1>This is the Teacher Settings</h1>
            </div>
        );
}