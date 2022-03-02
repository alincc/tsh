import { SxProps, Theme } from '@mui/material';

export const cardContainer: SxProps<Theme> = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
};

export const promo: SxProps<Theme> = {
  position: 'absolute',
  left: 0,
  top: 16,
  bgcolor: '#F9A52B',
  padding: '4px 16px',
  color: '#fff',
};
