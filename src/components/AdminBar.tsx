import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/AdminBar.css"

const AdminBar: React.FC = () => {
    return (

        <div className={"sidenav active"}>
            <Link to="/admin" className='link'>Admin Home</Link>
            <Link to="/admin/users" className='link'>Verify Users</Link>
            <Link to="/admin/verify-posts" className='link'>Verify Messages</Link>
            <Link to="/admin/verify-posts" className='link'>Verify Images</Link>
        </div>
    );
};

export default AdminBar;

