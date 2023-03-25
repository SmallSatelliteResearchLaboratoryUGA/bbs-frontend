import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

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
    <div>
      <h1>Posts</h1>
      {loading ? null : posts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
