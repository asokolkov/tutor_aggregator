import * as React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { FORGOT_PASSWORD_PAGE } from '../../../route-paths';

export const ForgetPasswordButton: React.FC = () => {
  return (
    <Button variant="link" colorScheme="blue" size="sm">
      <Link>
        <ReactLink to={FORGOT_PASSWORD_PAGE}>Забыли пароль?</ReactLink>
      </Link>
    </Button>
  );
};
