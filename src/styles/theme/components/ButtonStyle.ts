import { Components, Theme } from '@mui/material';

export const ButtonStyle = ({ palette }: Theme): Partial<Components> => {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          height: '38px',
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
        outlined: {
          border: `1px solid ${palette.primary.main}`,
          '&:hover': {
            backgroundColor: 'transparent',
            border: `1px solid ${palette.primary.dark}`,
            color: palette.primary.dark,
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
