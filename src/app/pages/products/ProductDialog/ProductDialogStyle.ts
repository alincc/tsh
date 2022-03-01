import { SxProps, Theme } from '@mui/material';

export const dialogImg: SxProps<Theme> = {
  width: '600px',
  minHeight: '354px',
};

export const dialogCloseButton: SxProps<Theme> = {
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[900],
};
