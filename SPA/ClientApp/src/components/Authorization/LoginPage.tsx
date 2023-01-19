import {
  ChakraProvider,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Divider,
  Link,
  Heading,
  VStack,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Theme from '../../theme/index';
import { Link as RLink } from 'react-router-dom';
import { FORGOT_PASSWORD_PAGE, SIGNUP_PAGE } from '../../route-paths';
import { PasswordField } from './PasswordField';
import { OAuthButtons } from './OAuthButtons';
import { useRef } from 'react';
import AuthAPI from '../../apis/auth';

export const LoginPage = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const passwordRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const rememberMeRef = useRef<HTMLInputElement>();

  const handleSubmit = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const rememberMe = rememberMeRef.current.checked;

    AuthAPI.login({ email: email, password: password, rememberMe: rememberMe });
  };

  return (
    <ChakraProvider theme={Theme}>
      <Flex background={'white'} height={'60vh'}>
        <VStack margin={'20px'} width={'100%'}>
          <Stack textAlign="center">
            <Heading>Войти в аккаунт</Heading>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            width={isDesktop ? '50%' : '90%'}
            bg="white"
            borderWidth="2px"
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <HStack justify="center">
              <OAuthButtons></OAuthButtons>
            </HStack>
            <HStack margin={'10px'}>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                или
              </Text>
              <Divider />
            </HStack>
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Почта</FormLabel>
                  <Input
                    ref={emailRef}
                    id="email"
                    type="email"
                    placeholder="Введите почту"
                  />
                </FormControl>
                <PasswordField ref={passwordRef} />
              </Stack>
              <HStack justify="space-between">
                <Checkbox ref={rememberMeRef} defaultChecked>
                  Запомнить данные
                </Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                  <Link>
                    <RLink to={FORGOT_PASSWORD_PAGE}>Забыли пароль?</RLink>
                  </Link>
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button
                  variant={'solid'}
                  size={'lg'}
                  colorScheme={'blue'}
                  onClick={handleSubmit}
                >
                  Войти
                </Button>
              </Stack>
              <HStack spacing="1" justify="center">
                <Text color="muted">Нет аккаунта?</Text>
                <Button variant="link" colorScheme="blue">
                  <Link>
                    <RLink to={SIGNUP_PAGE}>Зарегистрироваться</RLink>
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
