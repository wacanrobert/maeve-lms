import React from 'react';
import TeacherAppBar from './Teacher/TeacherAppBar';
import TeacherMenuBar from './Teacher/TeacherMenuBar';
import TeacherNavBar from './Teacher/TeacherNavBar';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function createData(id, name, description, units, teacher,noofstudents) {
  return { id, name, description, units, teacher,noofstudents };
}

const rows = [
    createData(1, 'CS313', 'This course is one of the most important courses in Computer Science', 3, 'Jocelyn Flores', 3),
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#0B3455',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function TeacherDashboard(){

  <h1>This is the course the teacher handles</h1>
    return (

      
    <TableContainer component={Paper}>
        <div className ="App">
        <TeacherAppBar/>
        <TeacherNavBar/>
        <Box align="right" 
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="filled-basic" label="Search Course" variant="filled" />
        </Box>  
        
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