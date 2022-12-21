import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AdminAppBar from './AdminAppBar';
import AdminMenuBar from './AdminMenuBar';
import AdminNavBar from './AdminNavBar';
import './AdjustAppBar.css';
import './DefaultBG.css';
import './CSS/style.css';

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

export default function RegisterPage(){

        let navigate = useNavigate();
        return (
            <div>
                <div className ="DefaultBG">
                <AdminAppBar/>
                </div>
                
                <body>
                    <div class = "center">
                        <Typography sx={{color: 'white'}}>
                            <h1>W E L C O M E</h1>
                        </Typography>
                        
                        <form method = "post">
                            <div class="txt_field">
                            <input type="text" required name="admin_username"></input>
                            <span></span>
                            <label>Username</label>
                            </div>
                            <div class="txt_field">
                            <input type="password" required name="admin_password"></input>
                            <span></span>
                            <label>Password</label>
                            </div>
                            <div class="txt_field">
                            <input type="text" required name="admin_fullname"></input>
                            <span></span>
                            <label>Fullname</label>
                            </div>
                            <div class="txt_field">
                            <input type="email" required name="admin_email"></input>
                            <span></span>
                            <label>Email</label>
                            </div>
                            <div class="txt_field">
                            <input type="text" required name="admin_phone_number"></input>
                            <span></span>
                            <label>Phone Number</label>
                            </div>
                            <div class="txt_field">
                            <input type="text" required name="admin_address"></input>
                            <span></span>
                            <label>Address</label>
                            </div>
                            <div class="txt_field">
                            <input type="text" required name="admin_position"></input>
                            <span></span>
                            <label>Position</label>
                            </div>
                            <ThemeProvider theme={theme}>
                                <Button style={{ fontSize: '20px' }} color="neutral" onClick={() => {navigate('/' + 'Home')}}>Register</Button>
                            </ThemeProvider>
                        </form>
                    </div>
                 </body>
                    

            </div>
        );
}