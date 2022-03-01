import { SxProps, Theme } from '@mui/material';
import { Axis, center, Direction } from 'styles/mixins/Center';

export const smNavWrapper: SxProps<Theme> = {
  ...center(Axis.XY, Direction.ROW),
  pt: 6,
  pb: 3,
  mb: 7,
  backgroundColor: '#fff',
};

export const smNavContentContainer: SxProps<Theme> = {
  ...center(Axis.XY, Direction.COLUMN),
  alignItems: 'space-between',
  marginY: '4px',
};

export const smNavRow: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
};

export const lgNavWrapper: SxProps<Theme> = {
  ...center(Axis.XY, Direction.ROW),
  paddingY: 6,
  mb: 7,
  backgroundColor: '#fff',
};

export const lgNavContentContainer: SxProps<Theme> = {
  ...center(Axis.XY, Direction.ROW),
  justifyContent: 'space-between',
};
