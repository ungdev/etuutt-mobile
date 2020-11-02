import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { IconProps } from '../Icons.interface';
import { getSvgProps } from '../Icons.utils';

export const Calendar = (props: IconProps) => {
  const { color } = props;

  return (
    <Svg {...getSvgProps(props)} viewBox="0 0 512 512">
      <Rect
        fill={'transparent'}
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={32}
        x={48}
        y={80}
        width={416}
        height={384}
        rx={48}
      />
      <Circle cx={296} cy={232} r={24} fill={color} stroke={color} />
      <Circle cx={376} cy={232} r={24} fill={color} stroke={color} />
      <Circle cx={296} cy={312} r={24} fill={color} stroke={color} />
      <Circle cx={376} cy={312} r={24} fill={color} stroke={color} />
      <Circle cx={136} cy={312} r={24} fill={color} stroke={color} />
      <Circle cx={216} cy={312} r={24} fill={color} stroke={color} />
      <Circle cx={136} cy={392} r={24} fill={color} stroke={color} />
      <Circle cx={216} cy={392} r={24} fill={color} stroke={color} />
      <Circle cx={296} cy={392} r={24} fill={color} stroke={color} />
      <Path
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={32}
        strokeLinecap="round"
        d="M128 48v32m256-32v32"
      />
      <Path stroke={color} strokeLinejoin="round" strokeWidth={32} d="M464 160H48" />
    </Svg>
  );
};
