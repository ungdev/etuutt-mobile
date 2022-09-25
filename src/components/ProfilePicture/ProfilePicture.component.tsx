import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { palette } from '../../theme/theme';

const BORDER_SIZE = 6;

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface ProfilePictureProps {
  imageUri: string;
  size: number;
}

export const ProfilePicture: FunctionComponent<ProfilePictureProps> = ({ imageUri, size }) => {
  const imageSize = size - BORDER_SIZE;

  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }]}>
      <Image
        source={{ uri: imageUri }}
        style={{
          width: imageSize,
          height: imageSize,
          borderRadius: imageSize / 2,
        }}
      />
    </View>
  );
};
