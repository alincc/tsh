import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/routing.model';
import { lgNavWrapper } from './NavbarStyle';

const LoginNavbar: FC = () => {
  return (
    <Box sx={lgNavWrapper}>
      <Typography variant="h2">
        <Link to={AppRoute.HOME}>join.tsh.io</Link>
      </Typography>
    </Box>
  );
};

export default LoginNavbar;
