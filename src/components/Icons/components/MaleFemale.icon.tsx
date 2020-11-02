import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconProps } from '../Icons.interface';
import { getSvgProps } from '../Icons.utils';

export const MaleFemale = (props: IconProps) => {
  const { color, stroke } = props;

  return (
    <Svg {...getSvgProps(props)} viewBox="0 0 512 512">
      <Circle
        cx={216}
        cy={200}
        r={136}
        fill={color}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        fill={color}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M216 352v128m56-64H160m272-304V32h-80m-16.72 96.72L432 32"
      />
    </Svg>
  );
};
