import AsyncStorage from '@react-native-community/async-storage';
import { useState } from 'react';
import {
  ACCESS_TOKEN_EXPIRATION_KEY,
  ACCESS_TOKEN_KEY,
  CLIENT_ID_KEY,
  CLIENT_SECRET_KEY,
} from '../../../services/stockage/StorageKey';
import {
  AuthentificationContextType,
  AuthentificationStatus,
} from '../interfaces/authentification.interface';

export const useAuthentificationContext = () => {
  const [authentificationStatus, setAuthentificationStatus] = useState<AuthentificationStatus>(
    'UNKNOWN'
  );
  const login = () => {
    setAuthentificationStatus('AUTHENTICATED');
  };
  const logout = async () => {
    try {
      await AsyncStorage.removeItem(ACCESS_TOKEN_EXPIRATION_KEY);
      await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
      await AsyncStorage.removeItem(CLIENT_ID_KEY);
      await AsyncStorage.removeItem(CLIENT_SECRET_KEY);
      setAuthentificationStatus('UNAUTHENTICATED');
    } catch (event) {
      console.log(event);
    }
  };

  const authentificationContextValue: AuthentificationContextType = {
    authentificationStatus,
    login,
    logout,
  };

  return { authentificationContextValue };
};
