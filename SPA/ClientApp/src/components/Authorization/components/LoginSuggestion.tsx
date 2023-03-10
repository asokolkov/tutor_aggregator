import * as React from 'react';
import { Button, HStack, Link, Text } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { LOGIN_PAGE } from '../../../route-paths';

export const LoginSuggestion: React.FC = () => {
  return (
    <HStack spacing="1" justify="center">
      <Text color="muted">Уже есть аккаунт?</Text>
      <Button variant="link" colorScheme="blue">
        <Link>
          <ReactLink to={LOGIN_PAGE}>Войти</ReactLink>
        </Link>
      </Button>
    </HStack>
  );
};
