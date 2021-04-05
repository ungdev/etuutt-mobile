import { createContext } from 'react';
import { AuthentificationContextType } from '../interfaces/authentification.interface';

export const defaultAuthentificationContext: AuthentificationContextType = {
  authentificationStatus: 'UNKNOWN',
  login: () => {},
  logout: () => {},
};

export const AuthentificationContext = createContext<AuthentificationContextType>(
  defaultAuthentificationContext
);
