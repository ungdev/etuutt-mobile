import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { spacing } from '../../theme/theme';

interface HorizontalSpacerProps {
  size: number;
}

export const HorizontalSpacer: FunctionComponent<HorizontalSpacerProps> = ({ size }) => {
  return <View style={{ height: spacing * size }} />;
};
