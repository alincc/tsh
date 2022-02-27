import { CircularProgress, Grid, Pagination, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import UtilsContainer from 'app/components/UtilsContainer';
import { ChangeEvent, FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/redux-hooks';
import { useProductListQuery } from 'services/products/productsApi';
import { selectQuery, setLimit, setPage } from 'services/products/productsQuerySlice';
import EmptyProducts from '../EmptyProducts/EmptyProducts';
import ProductItem from '../ProductItem/ProductItem';

export const ProductsList: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });

  const dispatch = useAppDispatch();
  const productsQuery = useAppSelector(selectQuery);
  const { data: products, isLoading, isError } = useProductListQuery(productsQuery);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  useEffect(() => {
    matches ? dispatch(setLimit(8)) : dispatch(setLimit(4));
  }, [matches]);

  if (isLoading) {
    return (
      <UtilsContainer bgColor="transparent">
        <CircularProgress />
      </UtilsContainer>
    );
  }

  if (!products?.items || products?.meta.totalItems === 0 || isError) {
    return (
      <UtilsContainer bgColor="#fff">
        <EmptyProducts />
      </UtilsContainer>
    );
  }

  return (
    <>
      <Grid container rowSpacing={4} columnSpacing={3}>
        {products.items.length > 0 && products.items.map((product) => <ProductItem key={product.id} product={product} />)}
      </Grid>
      <Box my={7} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={products?.meta.totalPages}
          boundaryCount={3}
          siblingCount={0}
          page={productsQuery.page}
          onChange={handlePageChange}
        />
      </Box>
    </>
  );
};
