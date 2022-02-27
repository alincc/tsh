import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h1">Sign in</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              sx={{ marginTop: '40px' }}
              label="Username"
              id="username"
              name="username"
              placeholder="Enter username"
              fullWidth
              required
            />
            <TextField
              sx={{ marginTop: '40px' }}
              margin="normal"
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              fullWidth
              required
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 14 }} href="/">
              Log In
            </Button>
            <Box sx={{ mt: 4, color: 'red' }}>Forgot password?</Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
