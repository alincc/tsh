import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import AlertSnackbar from 'app/components/AlertSnackbar/AlertSnackbar';
import LoginNavbar from 'app/components/Navbar/LoginNavbar';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AppRoute } from 'routing/routing.model';
import { useLoginMutation } from 'services/auth/authApi';
import { LoginFormValues } from './Login.model';
import { imgBackground, loginContainer } from './Login.style';
import { validate } from './Login.validators';

export const Login: FC<any> = (props) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [login, { isLoading }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      await login(data).unwrap();
      props.history.push(AppRoute.HOME);
      setError('');
    } catch (error: any) {
      if ('data' in error) {
        setError(error.data.message);
        setOpen(true);
      }
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={false} sm={4} md={4} sx={imgBackground} />
      <Grid item xs={12} sm={8} md={8} component={Paper} elevation={0} square>
        <Grid item xs={12} sm={12} md={10} sx={loginContainer}>
          <LoginNavbar />
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ height: '100%' }}>
            <Typography variant="h1" gutterBottom>
              Login
            </Typography>
            <TextField
              sx={{ marginTop: '40px' }}
              label="Username"
              id="username"
              placeholder="Enter username"
              fullWidth
              error={'username' in errors}
              helperText={validate(errors.username)}
              {...register('username', { required: true, minLength: 6, maxLength: 15 })}
            />
            <TextField
              sx={{ marginTop: '40px' }}
              margin="normal"
              label="Password"
              id="password"
              type="password"
              placeholder="Enter password"
              fullWidth
              error={'password' in errors}
              helperText={validate(errors.password)}
              {...register('password', { required: true, minLength: 6 })}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 7 }} disabled={isLoading}>
              {isLoading ? 'Loading' : 'Log in'}
            </Button>

            <AlertSnackbar open={open} setOpen={setOpen} severity="error">{`${error}`}</AlertSnackbar>
            <Box sx={{ mt: 2 }}>Forgot password?</Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
