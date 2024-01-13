import React, { useEffect, useState, useRef } from 'react';
import "../styles/User.css"
import AboutBox from './AboutBox';

const User: React.FC = () => {

  return (
    <div className={"user"}>
      <div id="user-background" />
      <h1 className="user-title" id="user-title">
        Welcome, !
      </h1>
      <h3 className="user-statement" id="mission-statement"> 
        Mission Statement
      </h3>
      <AboutBox title="About BBS" description="Link to tutorial(?)"/>
    </div>
  );
};

export const useScrollDirection = (): 'up' | 'down' => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const direction = currentScrollPosition > lastScrollPosition ? 'down' : 'up';

      setScrollDirection(direction);
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPosition]);

  return scrollDirection;
};

export default User;
