import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/BBS';
import Post from './components/Post';
import NewPost from './components/NewPost';
import LoginAndRegister from './components/LoginAndRegister';
import AdminHomePage from './components/Admin/AdminHomePage'
import { AuthProvider } from './AuthContext';
import VerifyPostsPage from './components/Admin/VerifyPostsPage';
import UsersPage from './components/Admin/UsersPage';
import TeamHome from './components/Team/TeamHome';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Tutorial from './components/Tutorial';


export const HOME_PATH = "/";
export const DASHBOARD_PATH = "/dashboard";
export const ABOUT_PATH = "/about";
export const TUTORIAL_PATH = "/tutorial";
export const BBS_PATH = "/bbs";
export const POST_PATH = "/post/:id";
export const NEW_POST_PATH = "/new-post";
export const LOGIN_PATH = "/login";
export const ADMIN_PATH = "/admin";
export const ADMIN_VERIFY_POSTS_PATH = "/admin/verify-posts";
export const ADMIN_USERS_PATH = "/admin/users";
export const TEAM_HOME = "/team/home";

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={DASHBOARD_PATH} element={<Dashboard/>} /> 
          <Route path={ABOUT_PATH} element={<About />} /> 
          <Route path={TUTORIAL_PATH} element={<Tutorial />} /> 
          <Route path={BBS_PATH} element={<Posts />} />
          <Route path={POST_PATH} element={<Post />} />
          <Route path={NEW_POST_PATH} element={<NewPost />} />
          <Route path={LOGIN_PATH} element={<LoginAndRegister />} />
          <Route path={ADMIN_PATH} element={<AdminHomePage />} />
          <Route path={ADMIN_VERIFY_POSTS_PATH} element={<VerifyPostsPage />} />
          <Route path={ADMIN_USERS_PATH} element={<UsersPage />} />
          <Route path={TEAM_HOME} element={<TeamHome />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;