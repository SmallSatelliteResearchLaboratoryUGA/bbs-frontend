import React, { useState, useEffect } from 'react';
import { Post } from '../types';
import StickyNote from './StickyNote';
import '../styles/Posts.css'

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts (replace with a real API call)
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:8000/posts', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res)
      const data = await res.json();
      console.log(data);
      setPosts(data);
      setLoading(false);
    };

    fetchPosts()
  }, []);

  return (
    <div className='posts-page'>
      <h1 className='title'>Posts</h1>
      <div className='sticky-note-container'>
        {loading ? null : posts.map((post) => (
          <div key={post.id}>
            <StickyNote post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
