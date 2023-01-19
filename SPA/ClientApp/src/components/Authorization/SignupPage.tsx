import {
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  Stack,
  Switch,
  Text,
  VStack,
} from '@chakra-ui/react';
import Theme from '../../theme/index';
import { PasswordField } from './PasswordField';
import { OAuthButtons } from './OAuthButtons';
import { Link as RLink } from 'react-router-dom';
import { LOGIN_PAGE } from '../../route-paths';
import { useRef } from 'react';
import AuthAPI, { AccountType } from '../../apis/auth';

export const SignupPage = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const accountTypeRef = useRef<HTMLInputElement>();
  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameRef = useRef<HTMLInputElement>();
  const phoneRef = useRef<HTMLInputElement>();

  const handleSubmit = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const accountType = accountTypeRef.current.checked
      ? AccountType.Tutor
      : AccountType.Student;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const phone = '+7' + phoneRef.current.value;

    AuthAPI.register({
      email: email,
      password: password,
      accountType: accountType,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    })
      .then(() => {
        //TODO: navigate to main page/profile page
      })
      .catch((error) => {
        //TODO: show error
        console.log(error.message);
      });
  };

  return (
    <ChakraProvider theme={Theme}>
      <Flex background={'white'} height={'60vh'}>
        <VStack margin={'20px'} width={'100%'}>
          <Stack textAlign="center">
            <Heading>Зарегистрировать аккаунт</Heading>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            width={'40%'}
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
            <FormControl>
              <FormLabel htmlFor="email">Имя и фамилия</FormLabel>
              <HStack>
                <Input
                  ref={firstNameRef}
                  id="name"
                  type="text"
                  placeholder="Введите имя"
                />
                <Input
                  ref={lastNameRef}
                  id="surname"
                  type="text"
                  placeholder="Введите фамилию"
                />
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Телефон</FormLabel>
              <HStack>
                <InputGroup>
                  <InputLeftAddon children="+7" />
                  <Input
                    ref={phoneRef}
                    id="tel"
                    type="tel"
                    placeholder="9991234567"
                  />
                </InputGroup>
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Тип аккаунта</FormLabel>
              <HStack justify="center">
                <Text fontSize="md" whiteSpace="nowrap" color="muted">
                  Ученик
                </Text>
                <Switch
                  ref={accountTypeRef}
                  size="lg"
                  colorScheme="Gray 200"
                  id="isRequired"
                  isRequired
                />
                <Text fontSize="md" whiteSpace="nowrap" color="muted">
                  Репетитор
                </Text>
              </HStack>
            </FormControl>
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
                <Checkbox>
                  Принимаю{' '}
                  <Link color="teal.500" href="#">
                    условия сервиса.
                  </Link>
                </Checkbox>
              </HStack>
              <Stack spacing="6">
                <Button
                  variant={'solid'}
                  size={'lg'}
                  colorScheme={'blue'}
                  onClick={handleSubmit}
                >
                  Зарегистрироваться
                </Button>
              </Stack>
              <HStack spacing="1" justify="center">
                <Text color="muted">Уже есть аккаунт?</Text>
                <Button variant="link" colorScheme="blue">
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
