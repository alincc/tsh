import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { RootState } from 'redux/store';

export const prepareHeaders = (headers: Headers, { getState }: Pick<BaseQueryApi, 'getState'>) => {
  const token = (getState() as RootState).auth.token;
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
};
