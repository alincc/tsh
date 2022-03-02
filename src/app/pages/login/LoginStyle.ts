import { SxProps, Theme } from '@mui/material';
import LoginBgImage from 'images/login-bg.png';
import { Axis, center } from 'styles/mixins/Center';

export const imgBackground: SxProps<Theme> = {
  backgroundImage: `url(${LoginBgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const loginContainer: SxProps<Theme> = {
  mx: 4,
  ...center(Axis.X),
};
