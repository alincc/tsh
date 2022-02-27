import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { FC } from 'react';
import { AppRoutes } from 'routing/AppRoutes';
import { tsh } from 'styles/theme/theme';
import '../styles/App.scss';

export const App: FC = () => {
  return (
    <ThemeProvider theme={tsh}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
};
