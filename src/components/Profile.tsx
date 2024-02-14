import React, { useEffect, useState } from 'react';
import "../styles/Profile.css"
import PostBox from './PostBox';
import StickyNote from './StickyNote';
import { Post } from '../types';

const Profile: React.FC = () => {

  const [callsign] = useState<string>("testing"); // Set callsign to a predetermined value
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`http://localhost:8000/sign/${callsign}`, { // Use backticks for template literal
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (!res.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: Post[] = await res.json();
        console.log("Data for posts object: " + data);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } 
    };
    if (callsign) {
      fetchPosts()
    }
  }, [callsign]);
  
  return (
    <div className={"user"}>
      <div id="user-background" />
      <h1 className="user-title" id="user-title">
        Welcome!
      </h1>
      <div className='post-container'>
        {loading || posts.length === 0 ? null : posts.map((post) => (
          <div key={post.id}>
            <StickyNote post={post} />
          </div>
        ))}
      </div>
      <PostBox title="Approved Posts..." description=""/>
      <PostBox title="Pending Posts..." description=""/>
    </div>
  );
};

export default Profile;
