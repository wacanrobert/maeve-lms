import React from 'react';
import TeacherNavBar from './TeacherNavBar';
import TeacherAppBar from './TeacherAppBar';

export default function TeacherProfileDetails(){

        return (
            <div TeacherNavBar ="App">
                <TeacherAppBar/> 
                <TeacherNavBar/> 
                <h1>This is the Teacher Details</h1>
            </div>
        );
}