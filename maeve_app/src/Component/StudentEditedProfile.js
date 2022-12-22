import React from 'react';
import { renderMatches } from 'react-router-dom';
import StudentAppBar from './StudentAppBar';
import StudentMenuBar from './StudentMenuBar';
import StudentNavBar from './StudentNavBar';
import './StudentProfileBackground.css';
import './DefaultBG.css';
import './UserProfile.css';
import { Button } from '@mui/material';
import {useNavigate} from "react-router-dom";

export default function StudentProfile(){
        let navigate = useNavigate();
        return (
        
            <div className ="DefaultBG">
                <div className = "StudentProfileBackground">
                    <StudentAppBar/>
                    <StudentNavBar/>
                    <body>
                        <center>
                            <div class="box">
                                <img src={require("./Student.png")} height="200px" width={"200px"}></img>
                                <p>USER DETAILS</p>
                                <input type="text" name="" placeholder="Remy Doe"></input>
                                <input type="text" name="" placeholder="Tres de Abril, Labangon"></input>
                                <input type="text" name="" placeholder="09238716584"></input>
                                <input type="text" name="" placeholder="remydoe123@gmail.com"></input>
                                <Button color="inherit" onClick={() => {navigate("/StudentEditProfile")}}>EDIT</Button>
                            </div>
                            <div class="details">
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