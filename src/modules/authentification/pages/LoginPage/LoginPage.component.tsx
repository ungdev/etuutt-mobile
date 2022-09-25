import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { palette } from '../../../../theme/theme';
import i18n from '../../../internationalization/service/i18n.service';
import { LoginModal } from './components/LoginModal';
import { MainButton } from './components/MainButton';
import { useLogin } from './useLogin.hook';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.white,
  },
});

export const LoginPage: FunctionComponent = () => {
  const { isModalVisible, onCloseModal, openModal } = useLogin();

  return (
    <View style={styles.container}>
      <LoginModal isVisible={isModalVisible} onCloseModal={onCloseModal} />
      <MainButton onPress={openModal} title={i18n.t('login.buttonConnection')} />
    </View>
  );
};
