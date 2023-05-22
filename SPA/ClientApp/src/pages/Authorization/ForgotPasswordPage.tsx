import {
  ChakraProvider,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  HStack,
  Input,
  Stack,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Theme from '../../assets/theme';
import { Link } from 'react-router-dom';
import { LOGIN_PAGE } from '../../routes/routePaths';

export const ForgotPasswordPage = () => {
  const [isError] = useState(false);
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <ChakraProvider theme={Theme}>
      <Flex background={'white'} height={'60vh'}>
        <VStack margin={'20px'} width={'100%'}>
          <Stack textAlign="center">
            <Heading>Восстановить пароль</Heading>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            width={isDesktop ? '50%' : '90%'}
            bg="white"
            borderWidth="2px"
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            {isError && (
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>
                  Если аккаунт существует, на почту было отправлено письмо
                </AlertTitle>
              </Alert>
            )}
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Почта от аккаунта</FormLabel>
                  <Input id="email" type="email" placeholder="Введите почту" />
                </FormControl>
              </Stack>
              <Stack spacing="6">
                <Button variant={'solid'} size={'lg'} colorScheme={'blue'}>
                  Отправить письмо
                </Button>
              </Stack>
              <HStack spacing="1" justify="center">
                <Text color="muted" size="md">
                  Восстановили пароль?
                </Text>
                <Button variant="link" colorScheme="blue" size="md">
                  <Link to={LOGIN_PAGE}>Войти</Link>
                </Button>
              </HStack>
            </Stack>
          </Box>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
};
