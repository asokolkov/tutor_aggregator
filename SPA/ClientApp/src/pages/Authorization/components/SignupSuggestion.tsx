import * as React from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { SIGNUP_PAGE } from '../../../routes/routePaths';

export const SignupSuggestion: React.FC = () => {
  return (
    <HStack spacing="1" justify="center">
      <Text color="muted">Нет аккаунта?</Text>
      <Button variant="link" colorScheme="blue">
        <Link to={SIGNUP_PAGE}>Зарегистрироваться</Link>
      </Button>
    </HStack>
  );
};
