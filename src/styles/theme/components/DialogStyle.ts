import { Components, Theme } from '@mui/material';

const padding = (theme: Theme) => {
  return {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(4),
  };
};

export const DialogStyle = (theme: Theme): Partial<Components> => {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: { borderRadius: theme.spacing(1) },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: { ...padding(theme) },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: { ...padding(theme), paddingBottom: theme.spacing(7) },
      },
    },
  };
};
