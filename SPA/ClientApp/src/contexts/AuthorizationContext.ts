import React from 'react';

export type AuthContextProps = {
  errorMessage: string;
  hasError: boolean;
  setError: (error: string) => void;
};

export const AuthorizationContext = React.createContext<AuthContextProps>({
  hasError: false,
  errorMessage: '',
  setError: () => {},
});
