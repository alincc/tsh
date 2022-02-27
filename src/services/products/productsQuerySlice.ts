import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsQuery } from 'models/product-query.model';
import { RootState } from '../../redux/store';

export const initialState: ProductsQuery = {
  searchValue: '',
  active: false,
  promo: false,
  limit: 8,
  page: 1,
};

export const productsQuerySlice = createSlice({
  name: 'productsQuery',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.page = 1;
      state.searchValue = action.payload;
    },
    setPromo: (state, action: PayloadAction<boolean, string>) => {
      state.page = 1;
      state.promo = action.payload;
    },
    setActive: (state, action: PayloadAction<boolean>) => {
      state.page = 1;
      state.active = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.page = 1;
      state.limit = action.payload;
    },
  },
});

export const { setSearchValue, setPromo, setActive, setPage, setLimit } = productsQuerySlice.actions;
export const selectQuery = (state: RootState) => state.productsQuery;

export default productsQuerySlice.reducer;
