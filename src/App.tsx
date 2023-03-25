import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Post';
import NewPost from './components/NewPost';
import LoginAndRegister from './components/LoginAndRegister';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/login" element={<LoginAndRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;