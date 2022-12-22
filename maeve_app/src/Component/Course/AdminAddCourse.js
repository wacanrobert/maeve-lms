import React from 'react';
import AdminAppBar from '../AdminAppBar';
import TableContainer from '@mui/material/TableContainer';
import Add_CourseSearchBar from './Add_CourseSearchBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AdminNavBar from '../AdminNavBar';
import {useNavigate} from "react-router-dom";

  const theme = createTheme();


export default function AdminAddCourse(){
  let navigate = useNavigate();

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
                <div className ="AdminAddCourse">
                <AdminAppBar/>
                <AdminNavBar/>
                <Add_CourseSearchBar/> 
            </div>

    <ThemeProvider theme={theme}>
      <Container component="main" >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="cname"
                  name="courseName"
                  required
                  fullWidth
                  id="courseName"
                  label="Course Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="numOfUnits"
                  label="No. of Units"
                  name="numOfUnits"
                  autoComplete="units"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="desc"
                  label="Course Description"
                  name="cdesc"
                  autoComplete="cdesc"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cteacher"
                  label="Course Teacher"
                  type="cteacher"
                  id="cteacher"
                  autoComplete="cteacher"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Button
            
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Cancel
            </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Button
             onClick={() => {
              {navigate('/addViewCourse')}
            }}
            style={{
              backgroundColor: "#0B3455"
            }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Course
            </Button>
            </Grid>
            </Grid>
            
            
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
           


            </TableContainer>
          );
}