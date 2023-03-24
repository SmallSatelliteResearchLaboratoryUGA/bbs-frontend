import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import LG2S from '../assets/LG2S.jpeg'
import MEMESat_1_Logo from '../assets/MEMESAT-1.png'
const Navbar: React.FC = () => {
  return (
    <nav>
        <div className={styles.logos}>
        <img className={styles.meme1_logo} src={MEMESat_1_Logo} alt="MEMESat-1 logo"/>
            <Link to="https://letsgo2space.com/"> 
                <img className={styles.lg2s_logo} src={LG2S} alt="Lets Go To Space logo"/>
            </Link>
        </div>
        <div className={styles.redirects}>
            <div>
                <Link to="/" className={styles.link}>Home</Link>
            </div>
            <div>
                <Link to="/posts" className={styles.link}>Posts</Link>
            </div>
            <div>
                <Link to="/new-post" className={styles.link}>New Post</Link>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;