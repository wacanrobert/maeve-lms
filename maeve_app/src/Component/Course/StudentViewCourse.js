import React from 'react';
import AdminAppBar from '../AdminAppBar';
import AdminMenuBar from '../AdminMenuBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CourseSearchBar from './CourseSearchBar';
import {StyledTableCell} from './Style';
import AdminNavBar from '../AdminNavBar';

function createData(id, name, description, units, teacher,noofstudents) {
  return { id, name, description, units, teacher,noofstudents };
}

const rows = [
    createData(1, 'Course1', 'Sample Course Description', 3, 'Hargarve Marney Hore', 28),
  ];

export default function AdminViewCourse(){

        return (
            

            <TableContainer component={Paper}>
                <div className ="AdminCourseDashboard">
                <AdminAppBar/>
                <AdminNavBar/>
                <CourseSearchBar/> 
            </div>
            </TableContainer>
          );
}