import { Components, Theme } from '@mui/material';

export const CardStyle = (theme: Theme): Partial<Components> => {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1),
          boxShadow: 'none',
          height: '400px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(2),
          paddingBottom: 0,
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: theme.spacing(2),
          paddingBottom: theme.spacing(3),
        },
      },
    },
  };
};
