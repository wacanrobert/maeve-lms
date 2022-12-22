import React from 'react';
import StudentAppBar from './StudentAppBar';
import StudentMenuBar from './StudentMenuBar';
import StudentNavBar from './StudentNavBar';
//import './AdjustAppBar.css';
//import './DefaultBG.css';
import List from './List';
import './courses.css';

export default function StudentDashboard(){

        return (
            <div className='DefaultBG'>
                <div>
                
                    <StudentAppBar/>
                    <StudentNavBar/>

                    <div className="StudentProfileBackground">
                        <List/>
                    </div>
                    
                    
                    
                    
                </div>
                
                 
                 
                

            </div>
            
        );
}