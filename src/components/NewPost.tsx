import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const NewPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Save the new post (replace with a real API call)
    // replace the console.log statement with an API call 
    //to save the new post to your backend server. 
    //After the API call is complete, you can redirect the user to the appropriate page,
    // such as the list of posts or the newly created post's detail page.
    console.log('New post:', { title, content });

    // Redirect to the posts page after successful submission
    history('/posts');
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPost;
