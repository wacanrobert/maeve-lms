import React, { Component } from 'react';
import './UserProfile.css';

class Profile extends Component {
    render() {
        return (
            <div>
                <body>
                    <div class="user">
                        <img src={require("./Student.png")}></img>
                        <div class="info">
                            <h1>John Smith</h1>
                            <p>Student at CIT-U</p>
                            <p>BSCS-3 F2</p>
                            <a href="#">Connect with me</a>
                        </div>
                    </div>
                </body>
            </div>
        );
    }
}

export default Profile;