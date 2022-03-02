import { Components, Theme } from '@mui/material';

export const ButtonStyle = (theme: Theme): Partial<Components> => {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap',
          '& .MuiTouchRipple-root': {
            display: 'none',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
          height: '38px',
        },
        outlined: {
          border: `1px solid ${theme.palette.primary.main}`,
          '&:hover': {
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.primary.dark}`,
            color: theme.palette.primary.dark,
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  };
};
