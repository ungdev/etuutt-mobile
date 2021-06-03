import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { paths } from '../../../../navigation/paths';

const styles = StyleSheet.create({
  buttonHeader: {
    marginLeft: 15,
    marginRight: 15,
  },
});

interface SettingsButtonProps {
  image: ReactNode;
}

export const SettingsButton: FunctionComponent<SettingsButtonProps> = ({ image }) => {
  const { navigate } = useNavigation();
  const onButtonPressComments = () => {
    navigate(paths.settings.name);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => onButtonPressComments()} style={styles.buttonHeader}>
        {image}
      </TouchableOpacity>
    </View>
  );
};
