import React from 'react';
import { renderMatches } from 'react-router-dom';
import StudentAppBar from './StudentAppBar';
import StudentMenuBar from './StudentMenuBar';
import StudentNavBar from './StudentNavBar';
import './StudentProfileBackground.css';
import './DefaultBG.css';

export default function StudentProfile(){

        return (
        
            <div className ="DefaultBG">
                <div className = "StudentProfileBackground">
                    <StudentAppBar/>
                    <StudentNavBar/>
                </div>
                
                
            </div>
        );
}