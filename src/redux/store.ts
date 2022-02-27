import { configureStore } from '@reduxjs/toolkit';
import { productApiSlice } from 'services/products/productsApi';
import ProductQueryReducer from '../services/products/productsQuerySlice';

export const store = configureStore({
  reducer: {
    productsQuery: ProductQueryReducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
