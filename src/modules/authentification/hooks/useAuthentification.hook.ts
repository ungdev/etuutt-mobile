import { useContext } from 'react';
import { AuthentificationContext } from '../context/authentification.context';

export const useAuthentification = () => {
  const { isLoggedIn } = useContext(AuthentificationContext);

  return { isLoggedIn };
};
