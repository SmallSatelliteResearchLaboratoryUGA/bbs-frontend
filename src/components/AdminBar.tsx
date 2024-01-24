import React, { useState } from 'react';
import "../styles/AdminBar.css"
import { Spin as Hamburger } from 'hamburger-react'


const AdminBar: React.FC = () => {

    const [isOpen, setOpen] = useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    return (

        <div className='sidenav active'>
            <Hamburger 
                        toggled={isOpen} 
                        toggle={setOpen} 
                        color={'#FFFFFF80'}
                        hideOutline={false}
                        onToggle={toggled => {
                            if(toggled) {
                                setShowHamburgerMenu(true);
                            }
                            else {
                                setShowHamburgerMenu(false);
                            }
                        }}
                    />
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/bbs'>BBS</a>
                </li>
            </ul>
        </div>
    );
};

export default AdminBar;

