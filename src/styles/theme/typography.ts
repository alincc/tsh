import { TypographyOptions } from '@mui/material/styles/createTypography';
import { palette } from './palette';

export const typography: TypographyOptions = {
  fontFamily: 'Nunito, Arial',
  fontWeightBold: 600,
  fontWeightLight: 600,
  fontWeightRegular: 600,
  h1: { fontSize: '30px', color: palette.grey![900] },
  h2: { fontSize: '24px', color: palette.grey![900] },
  h3: { fontSize: '18px', color: palette.grey![900] },
  body1: { fontSize: '14px', color: palette.grey![700] },
  button: { textTransform: 'none', fontWeight: 600 },
};
