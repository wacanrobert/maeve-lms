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
import { useNavigate } from 'react-router-dom';

const gridOptions = {
  columnDefs: [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'description', headerName: 'Description', width: 130 },
    {
      field: 'units',
      headerName: 'Units',
      type: 'number',
      width: 90,
    },
    { field: 'teacher', headerName: 'Teacher', width: 130 },
    { field: 'noofstudents', headerName: 'No. of Students', width: 130 },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 100,
  },
  rowSelection: 'single',
};



function createData(id, name, description, units, teacher,noofstudents) {
  return { id, name, description, units, teacher,noofstudents };
}
const rows = [
  createData(1, 'CSIT321', 'Application Development', 3, 'Leah V. Barbaso', 28),
    createData(2, 'CSIT345', 'Intelligent Systems', 5, 'Chris Jordan Alliac', 10),
    createData(3, 'CSIT340', 'Industry Elective I', 5, 'Jhon Christian Ambrad', 20),
    createData(4, 'ES038', 'Technopreneurship', 2, 'Jurydel G. Rama', 50),
    createData(5, 'MS098', 'Music', 2, 'Don Ganaden', 50),
];


export default function AdminViewCourse(){
  let navigate = useNavigate();

        return (
            

            <TableContainer component={Paper}>
                <div className ="AdminViewCourse">
                <AdminAppBar/>
                <AdminNavBar/>
                <Delete_CourseSearchBar/> 
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
                
                {rows.map((row) => (
                    <TableRow className='member' 
                      onClick={() => {navigate('/delete/id=6')}}
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
            </Table>
              
            </TableContainer>
          );
}