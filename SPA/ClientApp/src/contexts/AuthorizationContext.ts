import { createContext } from 'react';

export type AuthContextProps = {
  errorMessage: string;
  hasError: boolean;
  setError: (error: string) => void;
};

export const AuthorizationContext = createContext<AuthContextProps>({
  hasError: false,
  errorMessage: '',
  setError: () => {},
});
