import React from 'react';
import AdminAppBar from './AdminAppBar';
import AdminMenuBar from './AdminMenuBar';
import AdminNavBar from './AdminNavBar';
import AdminTable from './AdminTable';
import AdminDashboardList from './AdminDashBoardList';
import './courses.css';
import { Typography } from '@mui/material';


export default function AdminDashboard(){

        return (
            <div className ="App">
                  
                <AdminAppBar/>
                <AdminNavBar/>
                <AdminDashboardList/>

                
            </div>

            
        );
}