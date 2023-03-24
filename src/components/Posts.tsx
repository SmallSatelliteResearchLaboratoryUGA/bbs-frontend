import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch posts (replace with a real API call)
  useEffect(() => {
    // Simulate fetching posts
    const dummyPosts: Post[] = [
      { id: 1, title: 'Post 1', content: 'This is the first post.' },
      { id: 2, title: 'Post 2', content: 'This is the second post.' },
    ];
    setPosts(dummyPosts);
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
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
