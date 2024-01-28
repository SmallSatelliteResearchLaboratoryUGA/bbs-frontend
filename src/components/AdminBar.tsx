import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/AdminBar.css"
import { useAuth } from '../AuthContext';

const AdminBar: React.FC = () => {
    return (
        <Bar />
    );
};

function Bar(props: {id?: string}) {
    const {role_id} = useAuth();
    return (
        <div id={props.id}>
                {role_id === 2 && (
                    <div className="sidenav"> 
                        <Link to="/admin" className='admin-link'>Admin Home</Link>
                        <Link to="/admin/users" className='admin-link'>Verify Users</Link>
                        <Link to="/admin/verify-posts" className='admin-link'>Verify Messages</Link>
                        <Link to="/admin/verify-posts" className='admin-link'>Verify Images</Link>
                    </div>
                )}
        </div>
    )
}

export default AdminBar;

