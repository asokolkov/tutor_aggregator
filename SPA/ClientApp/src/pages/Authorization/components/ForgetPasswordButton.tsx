import * as React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FORGOT_PASSWORD_PAGE } from '../../../routes/routePaths';

export const ForgetPasswordButton: React.FC = () => {
  return (
    <Button variant="link" colorScheme="blue" size="sm">
      <Link to={FORGOT_PASSWORD_PAGE}>Забыли пароль?</Link>
    </Button>
  );
};
