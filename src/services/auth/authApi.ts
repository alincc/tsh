import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthQuery, AuthResponse, User } from 'services/auth/auth.model';
import { prepareHeaders } from 'services/prepareHeaders';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: prepareHeaders,
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    login: build.mutation<AuthResponse<User>, AuthQuery>({
      query: (body) => ({
        url: 'users/login',
        method: 'POST',
        body: body,
      }),
    }),
    currentUser: build.query<User, void>({
      query: () => 'users/me',
    }),
  }),
});

export const { useLoginMutation, useCurrentUserQuery } = authApi;
