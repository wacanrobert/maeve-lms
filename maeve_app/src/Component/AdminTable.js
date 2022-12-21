import React from 'react';
import AdminAppBar from './AdminAppBar';
import AdminMenuBar from './AdminMenuBar';
import AdminNavBar from './AdminNavBar';
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

function createData(id, name, position, email, phonenumber,address) {
  return { id, name, position, email, phonenumber,address };
}

const rows = [
    createData(1, 'Otis Hugh Wilson', 'Developer', 'wilson@email.com', '09952847266', 'Cebu City'),
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

export default function AdminDashboard(){

        return (

          

          <TableContainer component={Paper}>
              <div className ="App">
              <AdminAppBar/>
              <AdminNavBar/>
              <Box align="right" 
              component="form"
              sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              >
              <TextField id="filled-basic" label="Search Admin" variant="filled" />
              </Box>  
              
          </div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Id</StyledTableCell>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">Position</StyledTableCell>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">Phone Number</StyledTableCell>
                  <StyledTableCell align="center">Address</StyledTableCell>
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
                    <StyledTableCell align="center">{row.position}</StyledTableCell>
                    <StyledTableCell align="center">{row.email}</StyledTableCell>
                    <StyledTableCell align="center">{row.phonenumber}</StyledTableCell>
                    <StyledTableCell align="center">{row.address}</StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
}