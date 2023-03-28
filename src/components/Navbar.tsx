import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import LG2S from '../assets/LG2S.jpeg'
import MEMESat_1_Logo from '../assets/MEMESAT-1.png'
import { useState } from 'react';
import { retrieveToken } from './Security';
import { useAuth } from '../AuthContext';

const Navbar: React.FC = () => {
    const {isLoggedIn, logout} = useAuth();

    return (
        <nav>
            <div className={"logos"}>
            <img className={"meme1_logo"} src={MEMESat_1_Logo} alt="MEMESat-1 logo"/>
                <Link to="https://letsgo2space.com/"> 
                    <img className={"lg2s_logo"} src={LG2S} alt="Lets Go To Space logo"/>
                </Link>
            </div>
            <div className={"redirects"}>
                <div>
                    <Link to="/" className={"link"}>Home</Link>
                </div>
                <div>
                    <Link to="/posts" className={"link"}>Posts</Link>
                </div>
                {isLoggedIn ? (
                    <div>
                        <Link to="/" className={"link"}>
                            <button onClick={logout}>Logout</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/login" className={"link"}>Login</Link>
                    </div>
                )}
                {isLoggedIn && (
                    <div>
                        <Link to="/new-post" className={"link"}>New Post</Link>
                    </div>
                )}
            </div>
        </nav> 
    );
};

export default Navbar;