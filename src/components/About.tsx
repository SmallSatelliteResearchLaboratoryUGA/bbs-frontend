import React, { useEffect, useState, useRef } from 'react';
import "../styles/About.css"
import AboutBox from './AboutBox';
import MemeTeam from "../assets/meme team.jpg"

const About: React.FC = () => {

  return (
    <div className={"about"}>
      <div id="about-background" />
      <h1 className="about-title" id="about-title">
        About MEMESat-1
      </h1>
      <h3 className="about-statement" id="mission-statement"> 
        Mission Statement
      </h3>
      <AboutBox title="About BBS" description="Link to tutorial(?)"/>
      <AboutBox title="MEMESat-1 Mission Statement" description="Mission Statement(?)"/>
      <AboutBox title="Meet the Team" description="Team description or link to page of individual members(?)" image={MemeTeam} id="memeteam"/>
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

export default About;
