import { useState } from 'react';
import { AuthContextProps } from '../../contexts/AuthorizationContext';

export function useAuthContextValue() {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const setError = (error: string) => {
    setHasError(true);
    setErrorMessage(error);
  };

  const contextValue: AuthContextProps = {
    errorMessage,
    hasError,
    setError,
  };

  return contextValue;
}
