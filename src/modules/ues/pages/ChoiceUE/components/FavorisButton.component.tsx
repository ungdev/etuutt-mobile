import React, { FunctionComponent, ReactNode } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  buttonHeader: {
    marginLeft: 15,
    marginRight: 15,
  },
});

interface FavorisButtonProps {
  image: ReactNode;
}

export const FavorisButton: FunctionComponent<FavorisButtonProps> = ({ image }) => {
  return (
    <TouchableOpacity style={styles.buttonHeader} onPress={() => {}}>
      {image}
    </TouchableOpacity>
  );
};
