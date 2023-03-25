import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Post as PostType } from '../types';


const Post: React.FC = () => {
  const { id } = useParams() as {id : string};
  const [post, setPost] = useState<PostType | null>(null);

  // Fetch post by ID (replace with a real API call)
  useEffect(() => {
    // Simulate fetching a single post
    async function getPost() {
      const response = await fetch(`http://localhost:8000/posts/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      let new_post: PostType = await response.json();
      console.log(new_post);
      setPost(new_post);
    }
    getPost();
  }, [id]);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
