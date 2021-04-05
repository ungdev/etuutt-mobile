import { useState } from 'react';
import { AuthentificationContextType } from '../interfaces/authentification.interface';

export const useAuthentificationContext = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  const authentificationContextValue: AuthentificationContextType = {
    isLoggedIn,
    login,
    logout,
  };

  return { authentificationContextValue };
};
