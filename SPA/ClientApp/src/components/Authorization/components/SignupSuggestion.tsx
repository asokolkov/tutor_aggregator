import * as React from 'react';
import { Button, HStack, Link, Text } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { SIGNUP_PAGE } from '../../../route-paths';

export const SignupSuggestion: React.FC = () => {
  return (
    <HStack spacing="1" justify="center">
      <Text color="muted">Нет аккаунта?</Text>
      <Button variant="link" colorScheme="blue">
        <Link>
          <ReactLink to={SIGNUP_PAGE}>Зарегистрироваться</ReactLink>
        </Link>
      </Button>
    </HStack>
  );
};
