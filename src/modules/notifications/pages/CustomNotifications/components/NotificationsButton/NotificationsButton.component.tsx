import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { paths } from '../../../../../../navigation/paths';

const styles = StyleSheet.create({
  buttonHeader: {
    marginLeft: 15,
    marginRight: 15,
  },
});

interface NotificationsButtonProps {
  image: ReactNode;
}

export const NotificationsButton: FunctionComponent<NotificationsButtonProps> = ({ image }) => {
  const { navigate } = useNavigation();
  const onButtonPressComments = () => {
    navigate(paths.customNotifications.name);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => onButtonPressComments()} style={styles.buttonHeader}>
        {image}
      </TouchableOpacity>
    </View>
  );
};
