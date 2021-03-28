import React, { FunctionComponent, ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SettingsModal } from '../SettingsModal/SettingsModal.component';
import { useSettingsNavigation } from './useSettingsNavigation.hook';

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
  const { hideSettings, isVisible, showSettings } = useSettingsNavigation();

  return (
    <View>
      <SettingsModal onClose={hideSettings} isVisible={isVisible} />
      <TouchableOpacity onPress={showSettings} style={styles.buttonHeader}>
        {image}
      </TouchableOpacity>
    </View>
  );
};
