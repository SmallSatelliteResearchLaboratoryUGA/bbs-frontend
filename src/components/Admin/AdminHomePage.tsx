import React, { useContext } from 'react';
import {useAuth} from '../../AuthContext';
import { Button, Container, Grid, Typography } from '@mui/material';
import '../../styles/Admin/AdminHomePage.css';
import { Link } from 'react-router-dom';

function AdminHomePage() {
  const { role_id } = useAuth();

  if (role_id !== 2) {
    return <h1>Access denied</h1>;
  }

  return (
    <div className={"root"}>
      <Container maxWidth="md" className={"container"}>
        <Grid container spacing={4}>
          <Grid item xs={12} className={"title"}>
            <Typography variant="h4" align="center">
              Admin Dashboard
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className={"section"}>
              <Typography variant="h5" align="center">
                Verify
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={"button"}
                component={Link}
                to="/admin/verify-posts"
              >
                Verify Message Submissions
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={"button"}
                onClick={() => console.log('Verify Image Submissions')}
              >
                Verify Image Submissions
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AdminHomePage;