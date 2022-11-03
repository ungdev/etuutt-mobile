import { useContext, useEffect } from 'react';
import { AuthentificationContext } from '../context/authentification.context';
import { getAccessToken } from '../services/authentification.service';

export const useAuthentification = () => {
  const { authentificationStatus, login, logout } = useContext(AuthentificationContext);

  const autoLogin = async () => {
    try {
      const token = await getAccessToken();
      if (token) {
        login();
      } else {
        logout();
      }
    } catch (event) {
      console.log(event);
      logout();
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return { authentificationStatus };
};