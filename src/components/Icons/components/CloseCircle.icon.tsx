import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../Icons.interface';
import { getSvgProps } from '../Icons.utils';

export const CloseCicle = (props: IconProps) => {
  const { color, secondaryColor } = props;

  return (
    <Svg {...getSvgProps(props)} viewBox="0 0 512 512">
      <Path
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        fill={secondaryColor}
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth={32}
      />
      <Path
        d="M320 320L192 192M192 320l128-128"
        fill={secondaryColor}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
};
