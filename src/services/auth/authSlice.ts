import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse, AuthState, User } from 'services/auth/auth.model';
import { RootState } from '../../redux/store';

export const initialState: AuthState<User> = {
  token: localStorage.getItem('token'),
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    token: (state, action: PayloadAction<AuthResponse<User>>) => {
      localStorage.setItem('token', action.payload.access_token);
      state.token = action.payload.access_token;
    },
    user: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    onLogout: (state) => {
      localStorage.removeItem('token');
      state.user = null;
      state.token = null;
    },
  },
});

export const { token, user, onLogout } = authSlice.actions;
export const getCurrentUser = (state: RootState) => state.auth;

export default authSlice.reducer;
