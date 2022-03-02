import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'redux/store';
import { AppProvidersProps } from './AppProviders.types';

export const AppProviders: FC<AppProvidersProps> = ({ children }) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
);
