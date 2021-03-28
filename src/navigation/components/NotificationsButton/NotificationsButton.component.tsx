import React, { FunctionComponent, ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NotificationsModal } from '../NotificationsModal';
import { useNotificationsButton } from './useNotificationsButton.hook';

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
  const { hideModal, modalVisible, showModal } = useNotificationsButton();

  return (
    <View>
      <NotificationsModal onClose={hideModal} modalVisible={modalVisible} />
      <TouchableOpacity onPress={showModal} style={styles.buttonHeader}>
        {image}
      </TouchableOpacity>
    </View>
  );
};
