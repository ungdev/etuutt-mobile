import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconProps } from '../Icons.interface';
import { getSvgProps } from '../Icons.utils';

export const Location = (props: IconProps) => {
  const { color, secondaryColor } = props;

  return (
    <Svg {...getSvgProps(props)} viewBox="0 0 512 512">
      <Path
        d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
        fill={'transparent'}
        stroke={'white'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Circle
        cx={256}
        cy={192}
        r={48}
        fill={'transparent'}
        stroke={'white'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
};
