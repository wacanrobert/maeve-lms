import React from 'react';
import TeacherAppBar from './Teacher/TeacherAppBar';
import TeacherNavBar from './Teacher/TeacherNavBar';
import TeacherDashboardList from './TeacherDashboardList';
import TeacherStudentsTable from './TeacherStudentsTable';
import './Tdashboard.css';
import './scroll.css';
import './courses.css';
import { Typography } from '@mui/material';

export default function TeacherDashboard(){

        return (
            <div className ="App">

                <TeacherAppBar/>   
                <TeacherNavBar/>
                    <div >
                        <TeacherDashboardList/>
                    </div>
                
            </div>
        );
}