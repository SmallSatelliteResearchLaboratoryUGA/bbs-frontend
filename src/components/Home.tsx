import React from 'react';
import styles from "./Home.module.css"


const Home: React.FC = () => {
    return (
      <div className={styles.home}>
        <h1 className={styles.title}>Welcome to the MEMESat-1 Bulletin Board</h1>
        <p className={styles.subtitle}>Explore the universe with us!</p>
      </div>
    );
  };


export default Home;
