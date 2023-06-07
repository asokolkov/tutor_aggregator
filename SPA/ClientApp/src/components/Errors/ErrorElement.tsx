import * as React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

type Props = {
  message?: string;
};
export const ErrorElement: React.FC<Props> = ({ message }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Произошла ошибка!</AlertTitle>
      <AlertDescription>
        {message || 'Повторите попытку позже'}
      </AlertDescription>
    </Alert>
  );
};
