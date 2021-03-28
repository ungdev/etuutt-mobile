import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { LoginModal } from './components/LoginModal';
import { MainButton } from './components/MainButton';
import { useLogin } from './useLogin.hook';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export const LoginPage: FunctionComponent = () => {
  const { isModalVisible, closeModal, openModal } = useLogin();

  return (
    <View style={styles.container}>
      <LoginModal isVisible={isModalVisible} onCloseModal={closeModal} />
      <MainButton onPress={openModal} title="Connexion avec le site étudiant" />
    </View>
  );
};
