import { createTheme } from '@mui/material';
import { ButtonStyle } from './components/ButtonStyle';
import { CardStyle } from './components/CardStyle';
import { ContainerStyle } from './components/ContainerStyle';
import { DialogStyle } from './components/DialogStyle';
import { InputStyle } from './components/InputStyle';
import { RatingStyle } from './components/RatingStyle';
import { palette } from './palette';
import { typography } from './typography';

export const tsh = createTheme({
  palette,
  typography,
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1248,
      xl: 1536,
    },
  },
});

tsh.components = {
  ...ButtonStyle(tsh),
  ...InputStyle(tsh),
  ...CardStyle(tsh),
  ...RatingStyle(tsh),
  ...DialogStyle(tsh),
  ...ContainerStyle(tsh),
};
