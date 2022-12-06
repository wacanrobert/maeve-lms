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
                <AdminMenuBar/>
                <CourseSearchBar/> 
            </div>

            
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Id</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Description</StyledTableCell>
                    <StyledTableCell align="center">Units</StyledTableCell>
                    <StyledTableCell align="center">Teacher</StyledTableCell>
                    <StyledTableCell align="center">No. of Students</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row" align="center">
                        {row.id}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.name}</StyledTableCell>
                      <StyledTableCell align="center">{row.description}</StyledTableCell>
                      <StyledTableCell align="center">{row.units}</StyledTableCell>
                      <StyledTableCell align="center">{row.teacher}</StyledTableCell>
                      <StyledTableCell align="center">{row.noofstudents}</StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
}