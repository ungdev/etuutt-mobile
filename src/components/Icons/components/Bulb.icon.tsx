import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../Icons.interface';
import { getSvgProps } from '../Icons.utils';

export const Bulb = (props: IconProps) => {
  const { color, secondaryColor } = props;

  return (
    <Svg {...getSvgProps(props)} viewBox="0 0 512 512">
      <Path
        fill={secondaryColor}
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={32}
        strokeLinecap="round"
        d="M 304 384 v -24 c 0 -29 31.54 -56.43 52 -76 c 28.84 -27.57 44 -64.61 44 -108 c 0 -80 -63.73 -144 -144 -144 a 143.6 143.6 0 0 0 -144 144 c 0 41.84 15.81 81.39 44 108 c 20.35 19.21 52 46.7 52 76 v 24 M 224 480 h 64 M 208 432 h 96 M 256 384 V 256"
      />
      <Path
        fill={color}
        stroke={secondaryColor}
        strokeLinejoin="round"
        strokeWidth={32}
        strokeLinecap="round"
        d="M294 240s-21.51 16-38 16-38-16-38-16"
      />
    </Svg>
  );
};
