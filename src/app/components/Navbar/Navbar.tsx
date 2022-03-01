import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { Axis, center, Direction } from 'styles/mixins/Center';
import SearchForm from '../SearchForm/SearchForm';
import { lgNavContentContainer, lgNavWrapper, smNavContentContainer, smNavRow, smNavWrapper } from './NavbarStyle';

export const Navbar: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });

  if (!matches) {
    return (
      <Box sx={smNavWrapper}>
        <Container sx={smNavContentContainer}>
          <Box sx={smNavRow} mb={4}>
            <Typography variant="h2">
              <Link to={AppRoute.HOME}>join.tsh.io</Link>
            </Typography>
            <Button variant="outlined" href="/login">
              Login
            </Button>
          </Box>
          <SearchForm />
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={lgNavWrapper}>
      <Container sx={lgNavContentContainer}>
        <Box sx={{ ...center(Axis.Y, Direction.ROW) }}>
          <Typography variant="h2" sx={{ mr: '105px' }}>
            <Link to={AppRoute.HOME}>join.tsh.io</Link>
          </Typography>
          <SearchForm />
        </Box>
        <Button variant="outlined" sx={{ ml: 7 }} href="/login">
          Login
        </Button>
      </Container>
    </Box>
  );
};
