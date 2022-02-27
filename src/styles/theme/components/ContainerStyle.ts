import { Components, Theme } from '@mui/material';

export const ContainerStyle = (theme: Theme): Partial<Components> => {
  return {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: '1248px',
        root: {
          maxWidth: '1248px',
        },
      },
    },
  };
};
