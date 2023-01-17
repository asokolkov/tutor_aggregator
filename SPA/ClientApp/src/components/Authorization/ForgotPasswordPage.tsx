import {
  ChakraProvider,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Link,
  Heading,
  VStack,
  HStack,
  Input,
  Stack,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  //useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import Theme from '../../theme/index';
import { Link as RLink } from 'react-router-dom';
import { LOGIN_PAGE } from '../../route-paths';
//import { ChangeEvent, useState } from 'react';

export const ForgotPasswordPage = () => {
  // const [value, setValue] = useState('');
  // const {isError: isVisible,} = useDisclosure({ defaultIsOpen: true })
  //
  // function isValidEmail(email: string) {
  //     return /\S+@\S+\.\S+/.test(email);
  // }
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.target.value);
  // }
  // const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //     if (!isValidEmail(value)) {
  //         isVisible;
  //     } else {
  //         setValue('Правильная почта');
  //     }
  // }
  const isError = false;
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
            {isError ? (
              <React.Fragment>
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle>Введена некорректная почта!</AlertTitle>
                  <AlertDescription>Проверьте почту.</AlertDescription>
                </Alert>
              </React.Fragment>
            ) : (
              <React.Fragment></React.Fragment>
            )}
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Почта от аккаунта</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    // value={value}
                    // onChange={handleChange}
                    placeholder="Введите почту"
                  />
                </FormControl>
              </Stack>
              <Stack spacing="6">
                <Button
                  // onClick={handleSubmit}
                  variant={'solid'}
                  size={'lg'}
                  colorScheme={'blue'}
                >
                  Отправить письмо
                </Button>
              </Stack>
              <HStack spacing="1" justify="center">
                <Text color="muted" size="md">
                  Восстановили пароль?
                </Text>
                <Button variant="link" colorScheme="blue" size="md">
                  <Link>
                    <RLink to={LOGIN_PAGE}>Войти</RLink>
                  </Link>
                </Button>
              </HStack>
            </Stack>
          </Box>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
};
