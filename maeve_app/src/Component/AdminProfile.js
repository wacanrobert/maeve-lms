import React from 'react';
import AdminNavBar from './AdminNavBar';
import AdminAppBar from './AdminAppBar';

export default function AdminProfile(){

        return (
            <div className ="App">
                <AdminAppBar/>
                <AdminNavBar/>
            </div>
        );
}