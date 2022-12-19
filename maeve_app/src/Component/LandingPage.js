import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './DefaultBG.css';
import './CSS/style.css';

import {useNavigate} from "react-router-dom";
import { ButtonUnstyled } from '@mui/base';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#FFFFFF',
      contrastText: '#fff',
    },
  },
});


export default function ButtonAppBar() {

    let navigate = useNavigate();
    
  return (
    <div className ="DefaultBG">
      <div>
        <Box sx={{ flexGrow: 1, color: "#0B3455"}}>
          <AppBar position="static"sx={{ bgcolor: "#0B3455" }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              marginLeft: 50 ,
              color: 'white',
              textDecoration: 'none',
              }}>
                MAEVE EDUCATION
              </Typography>
              <Button color="inherit" onClick={() => {navigate('/' + 'students')}}>Student</Button>
              <Button color="inherit" onClick={() => {navigate('/' + 'AdminDashboard')}}>Admin</Button>
              <Button color="inherit" onClick={() => {navigate('/' + 'teachers')}}>Teacher</Button>
              <Button color="inherit" onClick={() => {navigate('/' + 'courses')}}>Course</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <body>
          <div class = "center">
              <h1>W E L C O M E</h1>
              <form method = "post">
                <div class="txt_field">
                  <input type="text" required></input>
                  <span></span>
                  <label>Username</label>
                </div>
                <div class="txt_field">
                  <input type="password" required></input>
                  <label>Password</label>
                </div>
                <ThemeProvider theme={theme}>
                  <Button style={{ fontSize: '30px' }} color="neutral" onClick={() => {navigate('/' + 'students')}}>Login</Button>
                </ThemeProvider>
                
                <div class="signup_link">
                  Not a member? <Button style={{ fontSize: '15px' }} color="inherit" onClick={() => {navigate('/' + 'students')}}>Click here to register</Button>
                </div>
              </form>
          </div>
        </body>
      </div>
    </div>
      
  );
}