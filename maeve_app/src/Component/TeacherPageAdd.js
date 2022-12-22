import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TeacherAppBar from './Teacher/TeacherAppBar';
import TeacherNavBar from './Teacher/TeacherNavBar';
import './AdjustAppBar.css';
import './DefaultBG.css';
import './CSS/style.css';

import {useNavigate} from "react-router-dom";

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { borderColor } from '@mui/system';

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
                <TeacherAppBar/>
                <TeacherNavBar/>
                </div>
                
                <body>
                    <div class = "centerAdmin">
                        <Typography sx={{color: '#0B3455'}}>
                            <h1>Enroll Student from CS313</h1>
                        </Typography>
                        
                        <form method = "post">
                            <div class="txt_field">
                            <input type="text" required></input>
                            <label>ID</label>
                            </div>
                            <div class="txt_field">
                            <input type="text" required></input>
                            <label>Name</label>
                            </div>
                            <div class="txt_field">
                            <input type="text" required></input>
                            <label>Units</label>
                            </div>
                            <ThemeProvider theme={theme}>
                                <Button style={{ fontSize: '20px' }} color="neutral" onClick={() => {navigate('/' + 'TeacherPageAdd')}}></Button>
                            </ThemeProvider>
                        </form>
                        <Button 
                        style={{
                                marginRight: "35px",
                                paddingInline: "50px",
                                borderColor:"white",
                                color: "white"
                            }} 
                            variant="contained" onClick={() => {navigate('/' + 'TeacherStudentsTableAdd')}}>Confirm</Button>
                        <Button
                        style={{
                                textDecorationColor: "#0B3455",
                                marginLeft: "35px",
                                paddingInline: "50px",
                                borderColor:"white",
                                color: "white"
                            }}  
                            variant="outlined" onClick={() => {navigate('/' + 'TeacherStudentsTable')}}>Cancel</Button>
                    </div>
                 </body>
                    

            </div>
        );
}