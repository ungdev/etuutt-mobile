import React, { FunctionComponent, ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

interface FavorisButtonProps {
  image: ReactNode;
}

export const FavorisButton: FunctionComponent<FavorisButtonProps> = ({ image }) => {
  return <TouchableOpacity onPress={() => {}}>{image}</TouchableOpacity>;
};
