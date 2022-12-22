import React, { Component } from 'react';
import './courses.css';

class List extends Component {
    render() {
        return (
            <div>
                <body>
                    <h1>ENROLLED COURSES</h1>
                        <div>
                        <link href="courses.css"></link>
                            <ul>
                                <li>
                                    <span class = "number">1</span>
                                    <span class="name">CS313</span>
                                    <span class="points"></span>
                                    <span class="badge"></span>
                                    <span class="badge"></span>
                                    <span class="badge">Automata Theory</span>
                                </li>
                                <li>
                                    <span class = "number">2</span>
                                    <span class="name">CSIT340</span>
                                    <span class="points"></span>
                                    <span class="badge"></span>
                                    <span class="badge"></span>
                                    <span class="badge">Industry Elective I</span>
                                </li>
                                <li>
                                    <span class = "number">3</span>
                                    <span class="name">ES038</span>
                                    <span class="points"></span>
                                    <span class="badge"></span>
                                    <span class="badge"></span>
                                    <span class="badge">Technopreneurship</span>
                                </li>
                                <li>
                                    <span class = "number">4</span>
                                    <span class="name">CS345</span>
                                    <span class="points"></span>
                                    <span class="badge"></span>
                                    <span class="badge"></span>
                                    <span class="badge">Intelligent Systems</span>
                                </li>
                                <li>
                                    <span class = "number">5</span>
                                    <span class="name">CSIT321</span>
                                    <span class="points"></span>
                                    <span class="badge"></span>
                                    <span class="badge"></span>
                                    <span class="badge">Application Development</span>
                                </li>
                            </ul>
                        </div>
                    
                    </body>
            </div>
        );
    }
}

export default List;