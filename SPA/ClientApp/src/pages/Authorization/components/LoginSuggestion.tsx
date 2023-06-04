import * as React from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LOGIN_PAGE } from '../../../routes/routePaths';

export const LoginSuggestion: React.FC = () => {
  return (
    <HStack spacing="5px" justify="center">
      <Text color="muted">Уже есть аккаунт?</Text>
      <Button variant="link" colorScheme="blue" size={'lg'} fontSize={'18px'}>
        <Link to={LOGIN_PAGE}>Войти →</Link>
      </Button>
    </HStack>
  );
};
