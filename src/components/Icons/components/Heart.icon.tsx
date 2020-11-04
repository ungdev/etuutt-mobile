import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../Icons.interface';
import { getSvgProps } from '../Icons.utils';

export const Heart = (props: IconProps) => {
  const { color, secondaryColor } = props;

  return (
    <Svg {...getSvgProps(props)} viewBox="0 0 24 20">
      <Path
        d="M10.388 17.992l-.001-.001c-2.997-2.559-5.422-4.63-7.107-6.569C1.602 9.492.75 7.792.75 5.995.75 3.094 3.173.75 6.368.75c1.804 0 3.536.794 4.655 2.031l.556.615.556-.615C13.255 1.544 14.985.75 16.79.75c3.195 0 5.618 2.344 5.618 5.245 0 1.798-.852 3.497-2.53 5.429-1.684 1.94-4.108 4.013-7.104 6.575l-.002.002-.002.001-1.19 1.012-1.192-1.022z"
        fill={color}
        stroke={secondaryColor}
        strokeWidth={1.5}
      />
    </Svg>
  );
};
