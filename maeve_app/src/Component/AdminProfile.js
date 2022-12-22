import React from 'react';
import { renderMatches } from 'react-router-dom';
import './StudentProfileBackground.css';
import './DefaultBG.css';
import './UserProfile.css';
import AdminAppBar from './AdminAppBar';
import AdminNavBar from './AdminNavBar';
import { Button } from '@mui/material';
import {useNavigate} from "react-router-dom";

export default function StudentProfile(){
        let navigate = useNavigate();
        return (
        
            <div className ="DefaultBG">
                <div className = "StudentProfileBackground">
                    <AdminAppBar/>
                    <AdminNavBar/>
                    <body>
                        <center>
                            <div class="box">
                                <img src={require("./Student.png")} height="200px" width={"200px"}></img>
                                <p>USER DETAILS</p>
                                <input type="text" name="" placeholder="Otis Hugh Wilson"></input>
                                <input type="text" name="" placeholder="Carcar City"></input>
                                <input type="text" name="" placeholder="09952847266"></input>
                                <input type="text" name="" placeholder="otis@email.com"></input>
                                <Button color="inherit" onClick={() => {navigate("/AdminProfileEdit")}}>EDIT</Button>
                            </div>
                            <div class="details">
                                <p class="Name">Otis Hugh Wilson</p>
                                <p>Student ID #: 1</p>
                                <p>Position: Developer</p>

                            </div>
                        </center>
                    </body>
                </div>
                
                
            </div>
        );
}