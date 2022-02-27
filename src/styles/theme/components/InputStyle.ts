import { Components, Theme } from '@mui/material';

export const InputStyle = (theme: Theme): Partial<Components> => {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: 'translate(0, -26px)',
          fontSize: '14px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: theme.palette.grey[300] },
            '&:hover fieldset': { borderColor: theme.palette.grey[500] },
            '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
            top: 0,
          },
          legend: {
            display: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1),
          color: theme.palette.grey[900],
          fontWeight: 600,
          fontSize: '14px',
        },
        input: { padding: theme.spacing(0) },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { height: '48px', padding: theme.spacing(2) },
        input: { '&. placeholder': { color: theme.palette.grey[900] } },
      },
    },
  };
};
