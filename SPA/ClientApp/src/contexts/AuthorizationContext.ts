import React from 'react';

export type ContextProps = {
  errorMessage: string;
  hasError: boolean;
  setError: (error: string) => void;
};

export const AuthorizationContext = React.createContext<ContextProps>(null);
