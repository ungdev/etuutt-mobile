import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { palette, typos } from '../../../../../../theme/theme';

interface MainButtonProps {
  onPress: () => void;
  title: string;
}

const styles = StyleSheet.create({
  title: {
    ...typos.xs,
    textAlign: 'center',
    color: palette.white,
    marginTop: 6,
  },
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: palette.curiousBlue,
  },
});

export const MainButton: FunctionComponent<MainButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
