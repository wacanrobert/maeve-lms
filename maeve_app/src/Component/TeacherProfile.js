import React from 'react';
import { renderMatches } from 'react-router-dom';
import TeacherAppBar from './Teacher/TeacherAppBar';
import TeacherNavBar from './Teacher/TeacherNavBar';
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
                    <TeacherAppBar/>
                    <TeacherNavBar/>
                    <body>
                        <center>
                            <div class="box">
                                <img src={require("./Student.png")} height="200px" width={"200px"}></img>
                                <p>USER DETAILS</p>
                                <input type="text" name="" placeholder="Jocelyn Flores"></input>
                                <input type="text" name="" placeholder="N  Bacalso, Avenue Cebu City"></input>
                                <input type="text" name="" placeholder="09568579768"></input>
                                <input type="text" name="" placeholder="jocelyn@gmail.com"></input>
                                <Button color="inherit" onClick={() => {navigate("/TeacherEditProfile")}}>EDIT</Button>
                            </div>
                            <div class="details">
                                <p class="Name">Jocelyn Flores</p>
                                <p>Teacher ID #: 1</p>
                                <p>Course: CS313</p>

                            </div>
                        </center>
                    </body>
                </div>
                
                
            </div>
        );
}