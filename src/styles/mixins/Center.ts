import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export enum Axis {
  X = 'x',
  Y = 'y',
  XY = 'xy',
}

export enum Direction {
  COLUMN = 'column',
  ROW = 'row',
}

export const center = (axis: Axis, direction = Direction.COLUMN): SxProps<Theme> => {
  const centerX = axis === Axis.X || axis === Axis.XY ? 'center' : '';
  const centerY = axis === Axis.Y || axis === Axis.XY ? 'center' : '';
  const center = direction === Direction.COLUMN ? centerX : centerY;

  return {
    display: 'flex',
    flexDirection: direction,
    justifyContent: center,
    alignItems: center,
  };
};
