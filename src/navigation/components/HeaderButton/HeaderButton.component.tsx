import React, { FunctionComponent, ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { HeaderModal } from '../HeaderModal';
import { useHeaderButton } from './useHeaderButton.hook';

const styles = StyleSheet.create({
  buttonHeader: {
    marginLeft: 15,
    marginRight: 15,
  },
});

interface HeaderButtonProps {
  image: ReactNode;
}

export const HeaderButton: FunctionComponent<HeaderButtonProps> = ({ image }) => {
  const { hideModal, modalVisible, showModal } = useHeaderButton();

  return (
    <View>
      <HeaderModal onClose={hideModal} modalVisible={modalVisible} />
      <TouchableOpacity onPress={showModal} style={styles.buttonHeader}>
        {image}
      </TouchableOpacity>
    </View>
  );
};
