import React, { FunctionComponent, ReactNode } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface GridButtonProps {
  onPress: () => void;
  image: ReactNode;
  title: string;
  color: string;
}

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    bottom: 9,
    fontSize: 14,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export const GridButton: FunctionComponent<GridButtonProps> = ({
  onPress,
  image,
  title,
  color,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: Dimensions.get('window').width / 3 - 6,
        height: Dimensions.get('window').width / 3 - 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 1,
        marginVertical: 1,
        backgroundColor: color,
        borderRadius: 12,
      }}
      onPress={onPress}
    >
      {image}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
