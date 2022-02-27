import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductsQuery } from 'models/product-query.model';
import { Product } from 'models/product.model';
import { ListResponse } from '../../models/list-response.model';

export const productApiSlice = createApi({
  reducerPath: 'productApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://join-tsh-api-staging.herokuapp.com/' }),
  endpoints: (builder) => ({
    productList: builder.query<ListResponse<Product>, ProductsQuery>({
      query: ({ searchValue, limit, page, promo, active }: ProductsQuery) => {
        const searchParam = searchValue ? `search=${searchValue}&` : '';
        const pageParam = `limit=${limit}&page=${page}&`;
        const promoParam = promo ? `promo=${promo}&` : '';
        const activeParam = active ? `active=${active}&` : '';

        return `products?${searchParam}${pageParam}${promoParam}${activeParam}`;
      },
    }),
    productDetails: builder.query<Product, number | void>({
      query: (id: number) => `products/${id}`,
    }),
  }),
});

export const { useProductListQuery, useProductDetailsQuery } = productApiSlice;
