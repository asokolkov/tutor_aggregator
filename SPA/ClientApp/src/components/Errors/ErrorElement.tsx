import * as React from 'react';
import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';

type Props = {
  message?: string;
};
export const ErrorElement: React.FC<Props> = ({ message }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertDescription>
        {message || 'Произошла ошибка. Повторите попытку позже'}
      </AlertDescription>
    </Alert>
  );
};
