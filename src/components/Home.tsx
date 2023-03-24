import React from 'react';
import styled from "styled-components";
const Home: React.FC = () => {
  return (
    <HomePageDiv>
      <h1>Welcome to the Bulletin Board</h1>
      <p>Click on "Posts" to view all posts or "New Post" to create a new one.</p>
    </HomePageDiv>
  );
};



const HomePageDiv = styled.div`
    
`

export default Home;
