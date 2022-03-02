import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from 'models/product/product.model';
import { prepareHeaders } from 'services/prepareHeaders';
import { ListResponse, ProductsQuery } from './products.model';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: prepareHeaders,
  }),
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

export const { useProductListQuery, useProductDetailsQuery } = productApi;
