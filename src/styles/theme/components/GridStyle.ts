import { Components, Theme } from '@mui/material';

export const GridStyle = (theme: Theme): Partial<Components> => {
  return {
    MuiGrid: {
      styleOverrides: {
        item: {
          paddingLeft: theme.spacing(3),
          paddingTop: theme.spacing(4),
        },
      },
    },
  };
};
