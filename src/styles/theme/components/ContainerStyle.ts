import { Components, Theme } from '@mui/material';

export const ContainerStyle = (theme: Theme): Partial<Components> => {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
        },
      },
    },
  };
};
