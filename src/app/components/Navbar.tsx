import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { Axis, center, Direction } from 'styles/mixins/Center';
import SearchForm from './SearchForm';

export const Navbar: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });

  if (!matches) {
    return (
      <Box
        pt={6}
        pb={3}
        mb={7}
        sx={{
          backgroundColor: '#fff',
          ...center(Axis.XY, Direction.ROW),
        }}
      >
        <Container sx={{ ...center(Axis.XY, Direction.COLUMN), alignItems: 'space-between', marginY: '4px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={4}>
            <Typography variant="h2">
              <Link to={AppRoute.HOME}>join.tsh.io</Link>
            </Typography>
            <Button variant="outlined" sx={{ width: '88px' }} href="/login">
              Login
            </Button>
          </Box>

          <SearchForm />
        </Container>
      </Box>
    );
  }

  return (
    <Box
      py={6}
      mb={7}
      sx={{
        backgroundColor: '#fff',
        ...center(Axis.XY, Direction.ROW),
      }}
    >
      <Container sx={{ ...center(Axis.XY, Direction.ROW), justifyContent: 'space-between' }}>
        <Box sx={{ ...center(Axis.Y, Direction.ROW) }}>
          <Typography variant="h2" sx={{ mr: '105px' }}>
            <Link to={AppRoute.HOME}>join.tsh.io</Link>
          </Typography>
          <SearchForm />
        </Box>
        <Button variant="outlined" sx={{ width: '88px', ml: '56px' }} href="/login">
          Login
        </Button>
      </Container>
    </Box>
  );
};
