import { CircularProgress, Grid, Pagination, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { ChangeEvent, FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/redux-hooks';
import { useProductListQuery } from 'services/products/productsApi';
import { currentPage, limit, selectQuery } from 'services/products/productsQuerySlice';
import { Axis, center } from 'styles/mixins/Center';
import EmptyProducts from '../EmptyProducts/EmptyProducts';
import ProductItem from '../ProductItem/ProductItem';
import { utilsContainer } from './ProductListStyle';

export const ProductsList: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });

  const dispatch = useAppDispatch();
  const productsQuery = useAppSelector(selectQuery);
  const { data: products, isLoading, isError } = useProductListQuery(productsQuery);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    dispatch(currentPage(value));
  };

  useEffect(() => {
    matches ? dispatch(limit(8)) : dispatch(limit(4));
  }, [matches]);

  if (isLoading) {
    return (
      <Box sx={utilsContainer('transparent')}>
        <CircularProgress />
      </Box>
    );
  }

  if (!products?.items || products?.meta.totalItems === 0 || isError) {
    return (
      <Box sx={utilsContainer('#fff')}>
        <EmptyProducts />
      </Box>
    );
  }

  return (
    <>
      <Grid container rowSpacing={4} columnSpacing={3}>
        {products.items.length > 0 && products.items.map((product) => <ProductItem key={product.id} product={product} />)}
      </Grid>
      <Box my={7} sx={center(Axis.X)}>
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
