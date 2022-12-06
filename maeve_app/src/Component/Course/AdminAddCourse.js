import React from 'react';
import AdminAppBar from '../AdminAppBar';
import AdminMenuBar from '../AdminMenuBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CourseSearchBar from './CourseSearchBar';
import {StyledTableCell} from './Style';



export default function AdminAddCourse(){

        return (
            

            <TableContainer component={Paper}>
                <div className ="AdminAddCourse">
                <AdminAppBar/>
                <AdminMenuBar/>
                <CourseSearchBar/> 
            </div>


            </TableContainer>
          );
}