import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import AlertSnackbar from 'app/components/BasicSnackbar/BasicSnackbar';
import LoginNavbar from 'app/components/Navbar/LoginNavbar';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from 'redux/redux-hooks';
import { AppRoute } from 'routing/routing.model';
import { useLoginMutation } from 'services/auth/authApi';
import { token } from 'services/auth/authSlice';
import { LoginFormValues } from './Login.model';
import { errorMsg } from './login.validators';
import { imgBackground, loginContainer } from './LoginStyle';

export const Login: FC<any> = (props) => {
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const response = await login(data).unwrap();
      dispatch(token(response));
      props.history.push(AppRoute.HOME);
      setError('');
    } catch (error: any) {
      setError(error.data.message);
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
              helperText={errorMsg(errors.username)}
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
              helperText={errorMsg(errors.password)}
              {...register('password', { required: true, minLength: 6 })}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 7 }} disabled={isLoading}>
              {isLoading ? 'Loading' : 'Log in'}
            </Button>

            {error && <AlertSnackbar>{`Error: ${error}`}</AlertSnackbar>}
            <Box sx={{ mt: 2 }}>Forgot password?</Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
