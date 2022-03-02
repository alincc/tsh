import { Container } from '@mui/material';
import { Navbar } from 'app/components/Navbar/Navbar';
import { FC, useEffect } from 'react';
import { useAppDispatch } from 'redux/redux-hooks';
import { useCurrentUserQuery } from 'services/auth/authApi';
import { user } from 'services/auth/authSlice';
import { ProductsList } from '../products/ProductList/ProductsList';

const Home: FC = () => {
  const { data: currentUser } = useCurrentUserQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    currentUser && dispatch(user(currentUser));
  }, [currentUser]);

  return (
    <>
      <Navbar />
      <Container>
        <ProductsList />
      </Container>
    </>
  );
};

export default Home;
