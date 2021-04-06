import React, { FunctionComponent, ReactNode, useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AuthentificationContext } from '../../../modules/authentification/context/authentification.context';
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
  const { logout } = useContext(AuthentificationContext);

  return (
    <View>
      <NotificationsModal onClose={hideModal} modalVisible={modalVisible} logout={logout} />
      <TouchableOpacity onPress={showModal} style={styles.buttonHeader}>
        {image}
      </TouchableOpacity>
    </View>
  );
};
