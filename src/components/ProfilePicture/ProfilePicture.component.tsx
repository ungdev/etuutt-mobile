import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { ACCESS_TOKEN_KEY } from '../../services/stockage/StorageKey';
import { palette } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.blue,
  },
});

interface ProfilePictureProps {
  imageUri: string;
  size: number;
}

export const ProfilePicture: FunctionComponent<ProfilePictureProps> = ({ imageUri, size }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    let cancel = false;

    const getAccessToken = async () => {
      const tokenStorage = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);

      if (cancel) {
        return;
      }
      setToken(tokenStorage);
    };
    getAccessToken();

    return () => {
      cancel = true;
    };
  }, [setToken, ACCESS_TOKEN_KEY]);

  return (
    <Avatar
      source={{
        uri: imageUri,
        headers: { Authorization: `Bearer ${token}` },
      }}
      rounded
      size={size}
      containerStyle={styles.container}
    />
  );
};
