import React, { Component } from 'react';

class ReadStudents extends Component {

    constructor(props){
        super(props)
        this.state ={
            students: []
        }
    }

    componentDidMount(){
        StudentService.getStudents().then((res) =>{
            this.setState({students: res.data});
        });
    }

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