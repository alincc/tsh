import { Box, Container, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/routing.model';
import { Axis, center, Direction } from 'styles/mixins/Center';
import SearchForm from '../SearchForm/SearchForm';
import User from '../User/User';
import { lgNavContentContainer, lgNavWrapper } from './NavbarStyle';

export const DesktopNavbar: FC = () => {
  return (
    <Box sx={lgNavWrapper}>
      <Container sx={lgNavContentContainer}>
        <Box sx={center(Axis.Y, Direction.ROW)}>
          <Typography variant="h2" sx={{ mr: '105px' }}>
            <Link to={AppRoute.HOME}>join.tsh.io</Link>
          </Typography>
          <SearchForm />
        </Box>
        <User />
      </Container>
    </Box>
  );
};
