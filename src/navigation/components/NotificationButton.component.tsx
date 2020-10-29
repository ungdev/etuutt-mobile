import React, { FunctionComponent, ReactNode, useState } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { palette, radius, shadows, spacing } from '../../theme/theme';

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

interface NotificationButtonProps {
  image: ReactNode;
}

export const NotificationButton: FunctionComponent<NotificationButtonProps> = ({ image }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const hideModal = () => setModalVisible(false);
  const showModal = () => setModalVisible(true);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight style={styles.openButton} onPress={hideModal}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={showModal}>{image}</TouchableOpacity>
    </View>
  );
};
