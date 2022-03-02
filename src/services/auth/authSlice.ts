import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from 'services/auth/auth.model';
import { RootState } from '../../redux/store';
import { authApi } from './authApi';

export const initialState: AuthState<User> = {
  token: localStorage.getItem('token'),
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    user: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    onLogout: (state) => {
      localStorage.removeItem('token');
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.token = payload.access_token;
      localStorage.setItem('token', payload.access_token);
    });
  },
});

export const { user, onLogout } = authSlice.actions;
export const getCurrentUser = (state: RootState) => state.auth;

export default authSlice.reducer;
