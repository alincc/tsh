import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'redux/store';
import { tsh } from 'styles/theme/theme';
import { AppProvidersProps } from './AppProviders.model';

export const AppProviders: FC<AppProvidersProps> = ({ children }) => (
  <ThemeProvider theme={tsh}>
    <CssBaseline />
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  </ThemeProvider>
);
