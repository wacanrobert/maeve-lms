import React from 'react';
import { renderMatches } from 'react-router-dom';
import { Button } from '@mui/material';
import AdminAppBar from './AdminAppBar';
import AdminNavBar from './AdminNavBar';
import './StudentProfileBackground.css';
import './DefaultBG.css';
import './UserProfile.css';
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
                                <input type="text" name="" placeholder="Full Name"></input>
                                <input type="text" name="" placeholder="Address"></input>
                                <input type="text" name="" placeholder="Phone Number"></input>
                                <input type="text" name="" placeholder="Email"></input>
                                <Button color="inherit" onClick={() => {navigate("/AdminProfile")}}>DONE</Button>
                            </div>
                            <div class="detailsEdit">
                                <p class="Name">Remy Doe</p>
                                <p>Student ID #: 1</p>
                                <p>Course & Year: BSCS-3</p>

                            </div>
                        </center>
                    </body>
                </div>
                
                
            </div>
        );
}