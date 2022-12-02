import React, { Component } from 'react';
import StudentService from '../Services/StudentService';

class ReadStudents extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            students: [
                {
                "studentUsername": "admin",
                "studentPassword": "password",
                "studentFullname": "admin",
                "studentEmail": "admin@gmail.com",
                "studentPhoneNumber": "0999999999",
                "studentAddress": "Tisa",
                "course": [],
                "studentId": 2
            },
            {
                "studentUsername": "admin",
                "studentPassword": "admin",
                "studentFullname": "admin admin",
                "studentEmail": "admin@gmail.com",
                "studentPhoneNumber": "0999999999",
                "studentAddress": "Tisa",
                "course": [],
                "studentId": 4
            }
        ]
        }
    }
/*
    componentDidMount(){
        StudentService().getStudents().then((res) =>{
            this.setState({students: res.data});
        });
    }
*/
    render() {
        return (
            <div>
                <h2>List of all Students</h2>
                <div className='row'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>USERNAME</th>
                                <th>PASSWORD</th>
                                <th>FULLNAME</th>
                                <th>EMAIL</th>
                                <th>PHONENUMBER</th>
                                <th>ADDRESS</th>
                                <th>COURSE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                    <tr key = {student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.studentUsername}</td>
                                        <td>{student.studentPassword}</td>
                                        <td>{student.studentFullname}</td>
                                        <td>{student.studentEmail}</td>
                                        <td>{student.studentPhoneNumber}</td>
                                        <td>{student.studentAddress}</td>
                                        <td>{student.course}</td>
                                        <td></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ReadStudents;