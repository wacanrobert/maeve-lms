import React from 'react';
import StudentAppBar from './StudentAppBar';
import StudentMenuBar from './StudentMenuBar';
import StudentNavBar from './StudentNavBar';
import './AdjustAppBar.css';
import './DefaultBG.css';
import './style.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StudentLoginAppBar from './StudentLoginAppBar';

import {useNavigate} from "react-router-dom";

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

export default function StudentLoginPage(){
    let navigate = useNavigate();
        return (
            <div>
                <div className ="DefaultBG">
                    <StudentLoginAppBar/>
                </div>    
                    <body>
                    
                        <div class = "center">
                            <Typography sx={{color: 'white'}}>
                                <h1>W E L C O M E</h1>
                            </Typography>
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
                                <ThemeProvider theme={theme} sx={{color: 'white'}}>
                                    <Typography sx={{color: 'white'}}> Not a member?</Typography> <Button style={{ fontSize: '15px' }} color="neutral" onClick={() => {navigate('/' + 'register')}}>Click here to register</Button>
                                </ThemeProvider>
                                </div>
                            </form>
                        </div>
                    </body>
                
                
            </div>
        );
}