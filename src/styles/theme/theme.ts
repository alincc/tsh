import { Checkbox, createTheme } from '@mui/material';
import { ButtonStyle } from './components/ButtonStyle';
import { CardStyle } from './components/CardStyle';
import { DialogStyle } from './components/DialogStyle';
import { InputStyle } from './components/InputStyle';
import { RatingStyle } from './components/RatingStyle';
import { palette } from './palette';
import { typography } from './typography';

export const tsh = createTheme({
  palette,
  typography,
  spacing: 8,
});

tsh.components = {
  ...ButtonStyle(tsh),
  ...Checkbox,
  ...InputStyle(tsh),
  ...CardStyle(tsh),
  ...RatingStyle(tsh),
  ...DialogStyle(tsh),
};
