import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { spacing } from '../../theme/theme';

interface VerticalSpacerProps {
  size: number;
}

export const VerticalSpacer: FunctionComponent<VerticalSpacerProps> = ({ size }) => {
  return <View style={{ width: spacing * size }} />;
};
