import { Components, Theme } from '@mui/material';

export const RatingStyle = (theme: Theme): Partial<Components> => {
  return {
    MuiRating: {
      styleOverrides: {
        root: { fontSize: '1rem', color: theme.palette.secondary.main },
        icon: { marginRight: '8px' },
      },
    },
  };
};
