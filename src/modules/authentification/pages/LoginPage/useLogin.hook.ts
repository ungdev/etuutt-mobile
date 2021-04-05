import AsyncStorage from '@react-native-community/async-storage';
import { useContext, useEffect, useState } from 'react';
import { CLIENT_ID_KEY, CLIENT_SECRET_KEY } from '../../../../services/stockage/StorageKey';
import { AuthentificationContext } from '../../context/authentification.context';
import { getToken } from '../../services/authentification.service';

export const useLogin = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { login: loginInContext } = useContext(AuthentificationContext);

  const onCloseModal = (url?: string) => {
    setIsModalVisible(false);
    if (url !== undefined) {
      login(url);
    }
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const autoLogin = async () => {
    try {
      const token = await getToken();
      if (token) {
        loginInContext();
      }
    } catch (event) {
      console.log(event);
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  const login = async (url: string) => {
    const params = url.split('?')[1].split('&');
    const clientId = params[0].split('=')[1];
    const clientSecret = params[1].split('=')[1];
    try {
      await AsyncStorage.setItem(CLIENT_ID_KEY, clientId);
      await AsyncStorage.setItem(CLIENT_SECRET_KEY, clientSecret);
      autoLogin();
    } catch (event) {
      console.log(event);
    }
  };

  return {
    isModalVisible,
    onCloseModal,
    openModal,
  };
};
