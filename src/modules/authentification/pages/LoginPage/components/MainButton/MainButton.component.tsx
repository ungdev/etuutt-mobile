import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Padding, palette, radius, typos } from '../../../../../../theme/theme';

interface MainButtonProps {
  onPress: () => void;
  title: string;
}

const styles = StyleSheet.create({
  title: {
    ...typos.xs,
    textAlign: 'center',
    color: palette.white,
  },
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: radius.medium,
    padding: Padding.medium,
    backgroundColor: palette.blue,
  },
});

export const MainButton: FunctionComponent<MainButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
