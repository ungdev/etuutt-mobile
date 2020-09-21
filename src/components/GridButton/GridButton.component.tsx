import React, { FunctionComponent, ReactNode } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface GridButtonProps {
  onPress: () => void;
  image: ReactNode;
  title: string;
}

const BACKGROUND_COLOR = '#FFFFFF';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 3 - 6,
    height: Dimensions.get('window').width / 3 - 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 1,
    marginVertical: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  title: {
    position: 'absolute',
    bottom: 5,
    fontSize: 10,
    textAlign: 'center',
  },
});

export const GridButton: FunctionComponent<GridButtonProps> = ({ onPress, image, title }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {image}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
