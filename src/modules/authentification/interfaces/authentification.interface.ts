export interface AuthentificationContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}
