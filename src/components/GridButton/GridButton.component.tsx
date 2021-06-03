import React, { FunctionComponent } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { palette, radius, spacing, typos } from '../../theme/theme';
import { IconProps } from '../Icons/Icons.interface';

const iconSize = '50%';

interface GridButtonProps {
  onPress: () => void;
  Icon: FunctionComponent<IconProps>;
  title: string;
  color: string;
}

const styles = StyleSheet.create({
  title: {
    ...typos.xs,
    fontSize: 14,
    textAlign: 'center',
    color: palette.white,
    marginTop: 6,
  },
  container: {
    width: Dimensions.get('screen').width / 3 - spacing * 2,
    height: Dimensions.get('screen').width / 3 - spacing * 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: spacing,
    borderRadius: radius.small,
  },
});

export const GridButton: FunctionComponent<GridButtonProps> = ({ onPress, Icon, title, color }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
      <Icon size={iconSize} color={palette.white} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
