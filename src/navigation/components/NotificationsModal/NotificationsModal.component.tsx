import React, { FunctionComponent } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CloseCicle } from '../../../components/Icons';
import { Marging, Padding, palette, radius, shadows, typos } from '../../../theme/theme';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  modalView: {
    width: '98%',
    height: '20%',
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: palette.white,
    borderRadius: radius.medium,
    padding: Padding.large,
    ...shadows.lightShadow,
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '20%',
    alignItems: 'flex-end',
    borderRadius: radius.medium,
    padding: Padding.small,
    margin: Marging.small,
  },
  logoutButton: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '100%',
    height: 50,
    backgroundColor: palette.blue,
    color: palette.white,
    borderRadius: radius.medium,
    padding: Padding.medium,
    margin: Marging.medium,
  },
  textStyle: {
    textAlign: 'center',
    color: palette.white,
    fontSize: typos.xs.fontSize,
  },
});

interface NotificationsModalProps {
  onClose: () => void;
  modalVisible: boolean;
  logout: () => void;
}

export const NotificationsModal: FunctionComponent<NotificationsModalProps> = ({
  onClose,
  modalVisible,
  logout,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <CloseCicle color={palette.blue} size={32} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton} onPress={logout}>
            <Text style={styles.textStyle}>Se déconnecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
