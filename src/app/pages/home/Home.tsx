import { Container } from '@mui/material';
import { Navbar } from 'app/components/Navbar';
import { FC } from 'react';
import { ProductsList } from '../products/ProductList/ProductsList';

const Home: FC = () => {
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
