import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../Icons.interface';
import { getSvgProps } from '../Icons.utils';

export const Cloud = (props: IconProps) => {
  const { color } = props;

  return (
    <Svg {...getSvgProps(props)} viewBox="0 0 512 512">
      <Path
        fill="transparent"
        stroke={color}
        strokeWidth={32}
        d="M400 240c-8.89-89.54-71-144-144-144-69 0-113.44 48.2-128 96-60 6-112 43.59-112 112 0 66 54 112 120 112h260c55 0 100-27.44 100-88 0-59.82-53-85.76-96-88z"
      />
    </Svg>
  );
};