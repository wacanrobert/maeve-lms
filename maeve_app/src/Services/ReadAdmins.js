import React, { Component } from 'react';
import axios from "axios";
import AdminService from './AdminService';

const getApi = axios.create({
    baseURL: 'http://localhost:8080/admin/getAllAdmins'
})

class ReadAdmins extends Component {
    state = {
        admins: []
    }

    constructor(){
        super();
        getApi.get('/').then(res => {
            console.log(res.data)
            this.setState({ admins: res.data })
        })
    }

    render() {
        return (
            <div>
                <h2>List of all Admins</h2>
                <div className='row'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>FULLNAME</th>
                                <th>EMAIL</th>
                                <th>PHONE NUMBER</th>
                                <th>ADDRESS</th>
                                <th>POSITION</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            this.state.admins.map(
                                admin =>
                                <tr key = {admin.id}>
                                    <td>{admin.id}</td>
                                    <td>{admin.admin_fullname}</td>
                                    <td>{admin.admin_email}</td>
                                    <td>{admin.admin_phone_number}</td>
                                    <td>{admin.admin_address}</td>
                                    <td>{admin.admin_position}</td>
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

export default ReadAdmins;