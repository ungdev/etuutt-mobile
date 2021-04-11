import React, { FunctionComponent } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { palette, radius, spacing, typos } from '../../../../../theme/theme';

interface AssosItemProps {
  title: string;
  image: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  title: {
    ...typos.xs,
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
  imageItem: {
    width: Dimensions.get('window').width / 4 - 25,
    height: Dimensions.get('window').width / 4 - 25,
  },
});

export const AssosItem: FunctionComponent<AssosItemProps> = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.imageItem} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
