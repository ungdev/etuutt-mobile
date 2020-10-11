import React, { FunctionComponent } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, radius, spacing, typos } from '../../theme/theme';

const iconSize = 70;

interface GridButtonProps {
  onPress: () => void;
  iconName: string;
  title: string;
  color: string;
}

const styles = StyleSheet.create({
  title: {
    ...typos.xs,
    textAlign: 'center',
    color: colors.button.color,
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

export const GridButton: FunctionComponent<GridButtonProps> = ({
  onPress,
  iconName,
  title,
  color,
}) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={colors.icons.color} style={{}} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
