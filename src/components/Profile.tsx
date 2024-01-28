import React, { useEffect, useState, useRef } from 'react';
import "../styles/Profile.css"
import PostBox from './PostBox';
import StickyNote from './StickyNote';
import { Post } from '../types';
import { backend_url, useAuth } from '../AuthContext';
import { useNavigate } from "react-router-dom"
import { storeToken } from './Security';

const Profile: React.FC = () => {

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    const fetchCallSign = async () => {
        const res = await fetch('http://localhost:8000/posts', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data: Post[] = JSON.parse(await res.json());
      console.log("Data for posts object: " + data);
      setPosts(data);
      setLoading(false);
    };
    fetchCallSign()
  }, []);
  
  return (
    <div className={"user"}>
      <div id="user-background" />
      <h1 className="user-title" id="user-title">
        Welcome!
      </h1>
      <PostBox title="Approved Posts..." description=""/>
      <PostBox title="Pending Posts..." description=""/>
      <div className='sticky-note-container'>
        {loading || posts.length === 0 ? null : posts.map((post) => (
          <div key={post.id}>
            <StickyNote post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
