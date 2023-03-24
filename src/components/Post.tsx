import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Post as PostType } from '../types';


const Post: React.FC = () => {
  const { id } = useParams() as {id : string};
  const [post, setPost] = useState<PostType | null>(null);

  // Fetch post by ID (replace with a real API call)
  useEffect(() => {
    // Simulate fetching a single post
    const dummyPost: PostType = { id: 1, title: 'Post 1', content: 'This is the first post.' };

    if (Number(id) === dummyPost.id) {
      setPost(dummyPost);
    }
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
