export type AuthentificationStatus = 'AUTHENTICATED' | 'UNAUTHENTICATED' | 'UNKNOWN';

export interface AuthentificationContextType {
  authentificationStatus: AuthentificationStatus;
  login: () => void;
  logout: () => void;
}
