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
                <div>
                <AdminAppBar/>
                <AdminNavBar/>
                </div>
                
                <body>
                    <div class = "centerAdmin">
                        <Typography sx={{color: '#0B3455'}}>
                            <h1>Delete Admin</h1>
                        </Typography>
                        
                        <form method = "post">
                            <div class="txt_field">
                            <input type="text" required name="admin_username" defaultValue = "darcyjoyce.gomez"></input>
                            <label>Username</label>
                            </div>
                            <div class="txt_field">
                            <input type="password" required name="admin_password" defaultValue = "admin"></input>
                            <label>Password</label>
                            </div>
                            <div class="txt_field">
                            <input type="text" required name="admin_fullname" defaultValue = "Darcy Joyce Gomez"></input>
                            <label>Fullname</label>
                            </div>
                            <div class="txt_field">
                            <input type="email" required name="admin_email" defaultValue = "gomez@email.com"></input>
                            <label>Email</label>
                            </div>
                            <div class="txt_field">
                            <input type="text" required name="admin_phone_number" defaultValue = "09998972345"></input>
                            <label>Phone Number</label>
                            </div>
                            <div class="txt_field">
                            <input type="text" required name="admin_address" defaultValue = "Talisay City"></input>
                            <label>Address</label>
                            </div>
                            <div class="txt_field">
                            <input type="text" required name="admin_position" defaultValue = "Analyst"></input>
                            <label>Position</label>
                            </div>
                            <ThemeProvider theme={theme}>
                                <Button style={{ fontSize: '20px' }} color="neutral" onClick={() => {navigate('/' + 'Home')}}></Button>
                            </ThemeProvider>
                        </form>
                        
                        <Button 
                        style={{
                                backgroundColor: "Red",
                                marginRight: "35px",
                                paddingInline: "50px"
                            }} 
                            variant="contained" onClick={() => {navigate('/' + 'AdminList')}}>Delete</Button>
                        
                        <Button 
                        style={{
                                marginRight: "15px",
                                marginLeft: "15px",
                                paddingInline: "50px"
                            }} 
                            variant="contained">Confirm</Button>
            
                        <Button
                        style={{
                                textDecorationColor: "#0B3455",
                                marginLeft: "35px",
                                paddingInline: "50px",
                                borderColor:"white",
                                color: "white"

                            }}  
                            variant="outlined" onClick={() => {navigate('/' + 'AdminListUpdate')}}>Cancel</Button>
                    </div>
                 </body>
                    

            </div>
        );
}