import React from 'react';
import AdminAppBar from '../AdminAppBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Delete_CourseSearchBar from './Delete_CourseSearchBar';
import {StyledTableCell} from './Style';
import AdminNavBar from '../AdminNavBar';

function createData(id, name, description, units, teacher,noofstudents) {
  return { id, name, description, units, teacher,noofstudents };
}

const rows = [
    createData(1, 'CSIT321', 'Application Development', 3, 'Leah V. Barbaso', 28),
    createData(2, 'CSIT345', 'Intelligent Systems', 5, 'Chris Jordan Alliac', 10),
    createData(3, 'CSIT340', 'Industry Elective I', 5, 'Jhon Christian Ambrad', 20),
    createData(4, 'ES038', 'Technopreneurship', 2, 'Jurydel G. Rama', 50),
    createData(5, 'ES038', 'Technopreneurship', 2, 'Jurydel G. Rama', 50),
  createData(6, 'CSIT313', 'Automata Theory', 5, 'Chery Lyn Sta. Romana', 28),
];


export default function AdminViewCourse(){

        return (
            

            <TableContainer component={Paper}>
                <div className ="AdminViewCourse">
                <AdminAppBar/>
                <AdminNavBar/>
                <Delete_CourseSearchBar/> 
            </div>

            
              
            </TableContainer>
          );
}