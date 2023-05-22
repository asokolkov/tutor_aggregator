import { useState } from 'react';
import { ContextProps } from '../contexts/AuthorizationContext';

export function useAuthContext() {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const setError = (error: string) => {
    setHasError(true);
    setErrorMessage(error);
  };

  const providerValues: ContextProps = {
    errorMessage,
    hasError,
    setError,
  };

  return { providerValues };
}
