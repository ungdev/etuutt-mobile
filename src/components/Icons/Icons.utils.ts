import { IconProps } from './Icons.interface';

export const getSvgProps = (props: IconProps) => ({
  style: { width: props.size, height: props.size },
  width: props.size,
  height: props.size,
  fill: 'none',
  strokeWidth: props.strokeWidth,
});
