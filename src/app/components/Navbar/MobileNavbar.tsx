import { Box, Button, Container, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/routing.model';
import SearchForm from '../SearchForm/SearchForm';
import { NavbarProps } from './Navbar.model';
import { smNavContentContainer, smNavRow, smNavWrapper } from './NavbarStyle';

export const MobileNavbar: FC<NavbarProps> = ({ onLogout }) => {
  return (
    <Box sx={smNavWrapper}>
      <Container sx={smNavContentContainer}>
        <Box sx={smNavRow} mb={4}>
          <Typography variant="h2">
            <Link to={AppRoute.HOME}>join.tsh.io</Link>
          </Typography>
          <Button variant="outlined" href={AppRoute.LOGIN} onClick={onLogout}>
            Logout
          </Button>
        </Box>
        <SearchForm />
      </Container>
    </Box>
  );
};
