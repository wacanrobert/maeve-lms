import React from 'react';
import AdminAppBar from '../AdminAppBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Update_CourseSearchBar from './Update_CourseSearchBar';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Delete_SelectedSearchBar from './Delete_SelectedSearchBar';
import {StyledTableCell} from './Style';
import AdminNavBar from '../AdminNavBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


  function createData(id, name, description, units, teacher,noofstudents) {
    return { id, name, description, units, teacher,noofstudents };
  }
  
  const rows = [
    createData(1, 'CSIT321', 'Application Development', 3, 'Leah V. Barbaso', 28),
    createData(2, 'CSIT345', 'Intelligent Systems', 5, 'Chris Jordan Alliac', 10),
    createData(3, 'CSIT340', 'Industry Elective I', 5, 'Jhon Christian Ambrad', 20),
    createData(4, 'ES038', 'Technopreneurship', 2, 'Jurydel G. Rama', 50),
    createData(5, 'ES038', 'Technopreneurship', 2, 'Jurydel G. Rama', 50),
    createData(6, 'CSIT313', 'Automata Theory', 6, 'Chery Lyn Sta. Romana', 28),
  ];


export default function AdminEditCourse(){

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
    };

        return (
            

            <TableContainer>
                <div className ="AdminEditCourse">
                <AdminAppBar/>
                <AdminNavBar/>
                <Delete_SelectedSearchBar/> 
            </div>

            <Table name = "tr" sx={{ minWidth: 650}} aria-label="simple table">
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
                      sx={{ '&:last-child td, &:last-child th': { color: "rgba(96, 96, 96)" } }}
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

              <Grid justifyContent="center" alignItems="center" container spacing={-5}  item xs={12} sm={6}>
              <Button
              type="delete"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Delete
            </Button> </Grid>
           


            </TableContainer>
          );
}