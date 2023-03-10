import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  Stack,
  Switch,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { PasswordField } from './components/PasswordField';
import { OAuthButtons } from './components/OAuthButtons';
import { Header } from './components/Header';
import { DividerWithOr } from './components/DividerWithOr';
import { SignupSuggestion } from './components/SignupSuggestion';

export const SignupPage = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex background={'white'}>
      <VStack margin={'20px'} width={'100%'}>
        <Header title={'Зарегистрировать аккаунт'} />
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          width={isDesktop ? '50%' : '90%'}
          bg="white"
          borderWidth="2px"
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <OAuthButtons />
          <DividerWithOr />
          <FormControl>
            <FormLabel htmlFor="email">Имя и фамилия</FormLabel>
            <HStack>
              <Input id="name" type="text" placeholder="Введите имя" />
              <Input id="surname" type="text" placeholder="Введите фамилию" />
            </HStack>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Телефон</FormLabel>
            <HStack>
              <InputGroup>
                <InputLeftAddon children="+7" />
                <Input id="tel" type="tel" placeholder="9991234567" />
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
                <Input id="email" type="email" placeholder="Введите почту" />
              </FormControl>
              <PasswordField />
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
              <Button variant={'solid'} size={'lg'} colorScheme={'blue'}>
                Зарегистрироваться
              </Button>
            </Stack>
            <SignupSuggestion />
          </Stack>
        </Box>
      </VStack>
    </Flex>
  );
};
