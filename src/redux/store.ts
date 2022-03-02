import { configureStore } from '@reduxjs/toolkit';
import { authApi } from 'services/auth/authApi';
import { productApi } from 'services/products/productsApi';
import AuthReducer from '../services/auth/authSlice';
import ProductQueryReducer from '../services/products/productsQuerySlice';

export const store = configureStore({
  reducer: {
    productsQuery: ProductQueryReducer,
    [productApi.reducerPath]: productApi.reducer,
    auth: AuthReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware).concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
