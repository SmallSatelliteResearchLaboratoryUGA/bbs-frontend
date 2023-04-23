import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Container, Grid, Typography } from '@mui/material';
import { Post } from '../../types';
import {useAuth} from '../../AuthContext';

function VerifyPostsPage() {
  const [Posts, setPosts] = useState<Post[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const history = useNavigate();
  const { role_id } = useAuth();

  if (role_id !== 2) {
    return <h1>Access denied</h1>;
  }

  useEffect(() => {
    // Fetch Posts from backend and update state
    const fetchPosts = async () => {
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
    fetchPosts();
    /*fetch('')
      .then((res) => res.json())
      .then((data) => setPosts(data));*/
  }, []);

  function handleCheckboxChange(id: number) {
    // Toggle the selected message
    setSelected((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((item) => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  }

  function handleSubmit() {
    // Send the selected Posts back to the backend
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selected }),
    })
      .then(() => {
        // Redirect to the admin home page
        history('/admin');
      })
      .catch((error) => console.error(error));
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Verify Posts
          </Typography>
        </Grid>
        {Posts.map((message) => (
          <Grid item xs={12} key={message.id}>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <Typography variant="h6">{message.title}</Typography>
                <Typography variant="subtitle1">{`${message.name} (${message.callsign})`}</Typography>
                <Typography variant="body1">{message.content}</Typography>
                <Typography variant="caption">{`Created at: ${message.created_at}`}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Checkbox
                  checked={selected.includes(message.id!)}
                  onChange={() => handleCheckboxChange(message.id!)}
                />
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            disabled={selected.length === 0}
            onClick={handleSubmit}
          >
            Approve Selected Posts
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default VerifyPostsPage;