import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Profile.css"
import PostBox from './PostBox';
import StickyNote from './StickyNote';
import { Post } from '../types';

const Profile: React.FC = () => {

  const { callsign } = useParams() as {callsign : string};
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:8000/sign', {
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

    fetchPosts()
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
