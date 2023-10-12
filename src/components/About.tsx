import React, { useEffect, useState, useRef } from 'react';
import "../styles/About.css"
import MemeTeam from "../assets/meme team.jpg"
import MeetTheTeam from './Home/MeetTheTeam';

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
        <div className="box">
          <div className="inner">
            <h2>About BBS</h2>
            <p>
                  "Link to tutorial(?)"
            </p>
          </div>
        </div>
        <div className="box">
          <div className="inner">
            <h2>MEMESat-1 Mission Statement</h2>
            <p>
                  "Mission Statement(?)"
            </p>
          </div>
        </div>
        <div className="box">
          <div className="inner">
            <h2>Meet the Team</h2>
            <p>
                  "Team description or link to page of individual members(?)"
            </p>
          </div>
          <div>
            <img src={MemeTeam} id="memeteam"/>
          </div>
        </div>
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
