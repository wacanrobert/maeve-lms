import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {useNavigate} from "react-router-dom";

export default function ButtonAppBar() {

    let navigate = useNavigate();
    
  return (
    <Box sx={{ flexGrow: 1, color: "#0B3455"}}>
      <AppBar position="static"sx={{ bgcolor: "#0B3455" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            MAEVE EDUCATION
          </Typography>
          <Button color="inherit" onClick={() => {navigate('/' + 'students')}}>Student</Button>
          <Button color="inherit" onClick={() => {navigate('/' + 'AdminDashboard')}}>Admin</Button>
          <Button color="inherit" onClick={() => {navigate('/' + 'teachers')}}>Teacher</Button>
          <Button color="inherit" onClick={() => {navigate('/' + 'StudentDashboard')}}>Course</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}