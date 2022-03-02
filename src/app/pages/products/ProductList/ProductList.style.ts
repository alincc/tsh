import { Axis, center } from 'styles/mixins/Center';

export const utilsContainer = (bgColor: string) => ({
  ...center(Axis.XY),
  backgroundColor: bgColor,
  width: '600px',
  height: '344px',
  margin: 'auto',
  borderRadius: '8px',
});
