import { Feather as Icon } from '@expo/vector-icons';
import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { bInterpolate } from 'react-native-redash';

const size = 30;
const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface ChevronProps {
  transition: Animated.Node<number>;
}

export const Chevron: FunctionComponent<ChevronProps> = ({ transition }) => {
  const rotateZ = bInterpolate(transition, -Math.PI, 0);

  return (
    <Animated.View style={[styles.container, { transform: [{ rotateZ }] }]}>
      <Icon name="chevron-up" color="whitesmoke" size={24} />
    </Animated.View>
  );
};
