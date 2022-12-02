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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#0B3455" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          
          <Button color="inherit" onClick={() => {navigate('/' + 'StudentDashboard')}}>Course</Button>
          <Button color="inherit" onClick={() => {navigate('/' + 'StudentDashboard')}}>Student</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}