import React from 'react';
import AdminAppBar from './AdminAppBar';
import AdminMenuBar from './AdminMenuBar';
import AdminTable from './AdminTable';

export default function AdminDashboard(){

        return (
            <div className ="App">
                
                <AdminAppBar/>   
                <AdminMenuBar/> 
                
                <h1>Welcome Admin</h1>
                  
                <AdminTable/>   
            </div>

            
        );
}