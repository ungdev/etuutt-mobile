import { useState } from 'react';
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
  const logout = () => {
    //effacer Asyncstorage
    setAuthentificationStatus('UNAUTHENTICATED');
  };

  const authentificationContextValue: AuthentificationContextType = {
    authentificationStatus,
    login,
    logout,
  };

  return { authentificationContextValue };
};
