import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Post';
import NewPost from './components/NewPost';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;