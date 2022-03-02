import { SxProps, Theme } from '@mui/material';

export const dialogImg = (theme: Theme): SxProps<Theme> => {
  return {
    width: '600px',
    minHeight: '354px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  };
};

export const dialogCloseButton: SxProps<Theme> = {
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[900],
};
