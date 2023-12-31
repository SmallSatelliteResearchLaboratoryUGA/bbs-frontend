import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import LG2S from '../assets/LG2S.png'
import MEMESat_1_Logo from '../assets/MEMESAT-1.png'
import { useAuth } from '../AuthContext';
import { Spin as Hamburger } from 'hamburger-react'
import { ADMIN_PATH, BBS_PATH, DASHBOARD_PATH, ABOUT_PATH, HOME_PATH, LOGIN_PATH } from '../App';

const Navbar: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    return (
        <nav>
            <div className={"logos"}>
                <img className={"meme1_logo"} src={MEMESat_1_Logo} alt="MEMESat-1 logo"/>
                <Link to="https://letsgo2space.com/" target="_blank"> 
                    <img className="lg2s_logo" src={LG2S} alt="Lets Go To Space logo"/>
                </Link>
            </div>
            <Redirects id="nav-redirects"/>
            <div className='hamburger'>
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
                    <div className='hamburger-drop-down-content'>
                        <Redirects />
                    </div>
                    <style>{`
                    .hamburger {
                        display: none;
                    }
                    
                    .hamburger-drop-down-content {
                        display: none;
                    }
                    
                    @media screen and (max-width:810px) {
                        #nav-redirects{
                            display: none;
                        }
                        .hamburger {
                            display: inline-block;
                            position: relative;
                        }
                        .hamburger-drop-down-content {
                            display: ${showHamburgerMenu ? 'flex' : 'none'};
                            align-items: center;
                            overflow: hidden;
                            position: absolute;
                            background-color: #00000090;
                            min-width: fit-content;
                            height: auto;
                            right: 0;
                            box-shadow: 0px 8px 16px 0px rgba(255, 255, 255, 0.2);
                            padding: 12px 16px;
                            z-index: 1;
                            
                        }
                        .redirects {
                            display: block;
                            min-width: fit-content;
                        }

                        .redirects > * {
                            margin-right: 0px;
                        }
                        
                        .link {
                            display: block;
                            min-width: fit-content;
                        }
                    }
                    
                    `}</style>
            </div>
            
        </nav> 
    );
};

function Redirects(props: {id?: string}) {
    const {isLoggedIn, logout, role_id} = useAuth();
    return (
        <div className={"redirects"} id={props.id}>
                <Link to={HOME_PATH} className="link">Home</Link>
                <Link to={ABOUT_PATH} className="link">About</Link>
                <Link to={DASHBOARD_PATH} className='link'>Dashboard</Link>
                <Link to={BBS_PATH} className="link">BBS</Link>
                {role_id === 2 && (
                    <Link to={ADMIN_PATH} className='link'>Admin</Link>
                )}
                {isLoggedIn ? (
                    <Link to={HOME_PATH} className="link" onClick={logout}>
                        Logout
                    </Link>
                ) : (
                    <Link to={LOGIN_PATH} className="link">Login</Link>
                )}
        </div>
    )
}

export default Navbar;