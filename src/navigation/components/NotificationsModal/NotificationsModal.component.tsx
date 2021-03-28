import React, { FunctionComponent } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { palette, radius, shadows, spacing } from '../../../theme/theme';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing * 4,
  },
  modalView: {
    margin: spacing * 4,
    backgroundColor: palette.white,
    borderRadius: radius.medium,
    padding: spacing * 9,
    alignItems: 'center',
    ...shadows.lightShadow,
  },
  openButton: {
    backgroundColor: palette.purple,
    color: palette.white,
    borderRadius: radius.medium,
    padding: spacing * 2,
  },
  textStyle: {
    color: palette.white,
  },
  modalText: {
    marginBottom: spacing * 4,
    textAlign: 'center',
  },
});

interface NotificationsModalProps {
  onClose: () => void;
  modalVisible: boolean;
}

export const NotificationsModal: FunctionComponent<NotificationsModalProps> = ({
  onClose,
  modalVisible,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <TouchableHighlight style={styles.openButton} onPress={onClose}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};
